.. _sshserver:

=====================================
SSHサーバーの設定
=====================================

画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server` を開きます。

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. image:: /img/sshserver.png
   :width: 350 px

.. _ssh_addserver:

サーバーの追加
-------------------------

サーバーを追加するには、:guilabel:`SSH Configuration` の右側の |add| ボタンをクリックし、分かりやすい名前を付けて :guilabel:`OK` をクリックします。リストに名前が表示されますので、以降このサーバーの設定をしていきます。設定内容は自動的に保存されます。

.. |add| image:: /img/add.png

.. hint::

   リストにはあらかじめ `FOCUSスパコン <https://www.j-focus.or.jp/>`_ 用の設定例「FOCUS」が入っています。FOCUSスパコンへのジョブ投入を行う場合は、リストで「FOCUS」を選択し、設定していただくと簡単です。

   「FOCUS」設定を削除した後、再度追加したい場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server --> Add FOCUS` をクリックしてください。

.. _ssh_servertab:

Serverタブの設定
-------------------------

:guilabel:`Server` タブで、サーバーへの接続に関する設定を行います。

- Host Name
- Port
   サーバーのホスト名（またはIPアドレス）、ポート番号を入力します。

- Job Manager
   サーバーで使われているジョブ管理システムを選択します。PBS、SLURM、PJMに対応しています。Rawを選択すると、ジョブ管理システムを使わずに直接計算を実行します。

   .. warning::

      通常、ジョブ管理システムを導入しているサーバーでは、計算の直接実行は想定されていません。サーバーの管理者に確認した上で設定してください。

- Work Directory
   計算で使用するファイルの転送先（サーバー上のディレクトリパス）を入力します。書き込み権限のある場所を指定してください。通常、ユーザーのホームディレクトリを指定すれば問題ありません。

- Proxy Type
   サーバーへの接続にプロキシを使用します。インターネットへの接続にプロキシが必要な環境で、外部のクラウド仮想マシン等に計算ジョブを投入する際にお使いいただけます。

   - HTTP / SOCKS4 / SOCKS5

      指定した形式のプロキシを使用します。デフォルトでは全体設定（\ :menuselection:`Network --> Proxy server`\ で設定したプロキシ）を使います。このサーバーに個別の設定を行う場合は、 |gearicon| をクリックしてください。

   - Command

      コマンドで接続する形式（ ``aws ssm start-session`` など）の場合にこちらを指定し、 |gearicon| からコマンドを設定してください。

- Account
   サーバーにSSH接続する際のアカウント情報を入力します。

   - パスワード認証の場合

      :guilabel:`User Name` にユーザー名、 :guilabel:`Password` にパスワードを入力してください。 :guilabel:`Private Key` は使用しません。

   - 公開鍵認証の場合

      :guilabel:`User Name` にユーザー名を入力し、 :guilabel:`Private Key` をクリックして秘密鍵ファイルを選択してください（ |clear| でクリア）。パスフレーズが設定されている場合は :guilabel:`Password` に入力してください。

      .. hint:: PuTTY形式の秘密鍵ファイル（拡張子 :file:`.ppk` ）はそのままではお使いいただけません。PEM形式またはOpenSSH形式に変換してお使いください。

設定内容に問題がなければ、タブが白色になります。問題がある場合はその項目が赤色で表示されますので、確認してください。

.. |gearicon| image:: /img/gear.png
.. |clear| image:: /img/clear.png

.. _ssh_jobtab:

Jobタブの設定
------------------------

次に、 :guilabel:`Job` タブでサーバーへのジョブ投入に関する設定を行います。

- Job Queue
   キューの名前のリストです。 |add| ボタンで追加、 |remove| ボタンで削除します。
   ジョブ管理システムを使わずに実行する場合でも、適当な名前のキューを作成してください。

.. |remove| image:: /img/remove.png

- Job Posting Command
- Job Script
   キューごとに、ジョブ投入用のコマンドとジョブスクリプトを設定します。ジョブ管理システムに応じたデフォルトの内容がキュー追加時に設定されます。必要に応じて編集してください。
   
   .. note::

      実際に実行されるスクリプトの内容は、ジョブ投入時に表示されるウィンドウでご確認ください。

   .. hint::

      バージョン2.0より前のNeuralMDを用いたNeuralMD連携機能を使用する際に、\ :ref:`ライセンス設定 <flexneumd>`\ のコマンドが必要な場合はここでジョブスクリプトに追加します。remoteLicenseを使っている場合、およびシェルの初期化ファイルで設定している場合は必要ありません。

      計算を実行する行（mpirun等）よりも前に、次の行を追加してください。

      .. code-block:: none

         export ADVANCED_LICENSE_FILE=(ライセンスファイルの場所)/neumd.lic

また、サーバーにGPUが搭載されている場合、Advance/NeuralMD関連の計算をGPUを使ってより高速に実行することができます。対応しているのは、Advance/NeuralMDを使ったニューラルネットワーク力場の学習（Advance/NeuralMD Pro版のライセンスが必要）、およびNeuralMD力場を使ったLAMMPSによる分子動力学計算です。設定画面右側の :guilabel:`GPU` タブを開き、 :guilabel:`GPU for Advance/NeuralMD` を有効にするとGPUを使うようになります。

複数のGPUが搭載されている場合、デフォルトではデバイスID0のGPUのみを使いますが、MPI並列と併用して各プロセスごとに使用するGPUを指定すると、より効率的にGPUを使うことができます。 |add| ボタンで行を追加し、左側のMPIプロセスIDに対応するGPUデバイスIDを右側に入力してください。行を削除するには、右クリックメニューの :guilabel:`Delete` をクリックします。 :guilabel:`Job Posting` タブ内で設定したMPI並列数（プロセス数）と行数が一致するように注意してください。

なお、各GPUに割り当てられたデバイスIDは、サーバー上で ``nvidia-smi -L`` を実行して確認できます。

.. note::

 - GPUドライバを事前にインストールしておく必要があります。CUDA 11.4.4を使用しており、これに対応するドライババージョン470.82.01以上が必要です。
 - ここでの設定はAdvance/NeuralMD関連の計算にのみ適用されます。それ以外のグラフニューラルネットワーク力場のGPU使用の設定とは独立しています。これらのGPU使用についてはそれぞれの環境設定方法を参照してください。

例えば、グラフィックカードが2つ搭載されているマシンで、MPI4並列で実行し、2プロセスをデバイスID0のGPU、2プロセスをデバイスID1のGPUに割り当てる場合は次のように設定します。

.. image:: /img/mpi2gpu.png

.. _ssh_speedtab:

Speedタブの設定
------------------------

:guilabel:`Speed` タブでは、サーバーからの情報取得・ファイルダウンロードの間隔、同時接続数を設定できます。

サーバーへのアクセス頻度が問題になる場合には、スライダーを :guilabel:`Slow` 側に動かすことで頻度を下げることができます。

:guilabel:`Connection Style` で、低速ネットワーク用の設定ができます。

- Online Mode
   常時オフラインモードに設定すると、リアルタイムでの結果取得（ファイルのダウンロード）を行いません。
 
- Download Mode
   容量の大きいバイナリファイルなどを除外し、テキストファイルのみダウンロードするよう設定できます。

- Download Time
   常時オフラインモードの際に、ファイルを一括ダウンロードする間隔（分単位）を設定します。

.. hint:: SLHMC（力場自動生成）のデータ（slhmc_datフォルダ内の各計算エンジンの出力）のダウンロード有無は、 :menuselection:`メインメニュー --> Properties --> Advance/NeuralMD` から設定できます。デフォルトではダウンロードを行いません。

.. _ssh_testtab:

接続テスト
------------------------

設定が完了したら、 :guilabel:`Test` タブでサーバーへの接続テストを行い、設定に問題がないか確認することができます。

:guilabel:`Start to Test Connection` をクリックすると、自動的にテストを行います。 ``TEST OF CONNECTION IS SUCCEEDED`` と表示されればテストは成功です。接続に失敗した場合は ``ERROR HAS OCCURRED IN TESTING CONNECTION`` と表示されますので、設定内容を再確認してください。

.. _ssh_edit:

設定の編集・削除・コピー
-------------------------

各タブで設定した内容は、サーバーごとに保存されます。リストから既に保存されているサーバーを選択すると、その設定内容を編集できます。

設定名の右の |edit| をクリックすると、設定の並び替え・削除・位置を指定した追加ができるウィンドウが開きます。

既存の設定内容をコピーして新たな設定を追加するには、 |add| ボタンを押した後、ダイアログの :guilabel:`Copy from` でコピー元の設定を選んでください。

.. |edit| image:: /img/edit.png
