.. _linux:

============================
インストール手順 (Linux)
============================

.. _preparel:

インストールの準備
==============================

本ソフトウェアのインストールには、インストーラーを使用します。インストーラーは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

 `Advance/NanoLabo (ver.2.9) <https://www.nanolabo.advancesoft.jp/?wpdmdl=1234>`_

 `Advance/NanoLabo Tool (ver.2.9) <https://www.nanolabo.advancesoft.jp/?wpdmdl=1240>`_

.. note::

   計算をリモートで実行する場合でも、NanoLabo本体と同じマシンにNanoLabo Toolをインストールしてください。

インストーラーにはJava Runtime Environmentが同梱されており、インストール時にインストール先ディレクトリにコピーされます。

.. _installerl:

インストール
=============================

端末（ターミナル）で、インストーラーのあるディレクトリに移動します。実行権限を付与したら、まずAdvance/NanoLaboのインストーラーを実行します。

.. code-block:: console

 $ chmod +x install_nanolabo_linux.bin install_nanolabo_tool_linux.bin
 $ ./install_nanolabo_linux.bin

言語の選択画面が出た場合は、インストール中に使用する言語を選択してください（ソフトウェア本体で使用する言語ではありません）。

画面の指示に従い、インストールの設定を行ってください。

.. note::

 書き込み権限のない場所にはインストールできません。インストール先として書き込み権限のある場所（ :file:`/home/ユーザー名/AdvanceSoft/NanoLabo` など）を指定するか、書き込み権限のあるユーザーでインストーラーを実行してください。

設定が終わると要約の画面が表示されます。特に、インストールフォルダーはAdvance/NanoLabo Toolのインストール、およびライセンスの設定の際に必要になりますので、控えておいていただくようお願いします。

.. image:: /img/install_summary_l.png

インストールが終わると、ライセンス登録案内が表示されます。ライセンス登録がお済みでない場合は、必要な項目をご記入ください。次へをクリックすると、ライセンス登録メールの内容が表示されますので、弊社宛に送信してください。

.. image:: /img/install_license_l.png

.. note::

 メール本文の「ホストＩＤ」が空欄になっている場合、Host ID取得時に必要なredhat-lsbライブラリがインストールされていない可能性があります。その場合、次のコマンドをroot権限で実行してインストールしてください。

 .. code-block:: console

  # yum -y install redhat-lsb-core

 インストーラーで一旦「戻る」をクリックし、再度「次へ」をクリックしていただくことで、Host IDの取得を再試行します。

.. note::

 ここでライセンス登録を行わない場合でも、ソフトウェア起動時に表示される案内画面から登録していただくことができます。

最後の画面で完了をクリックすると、Advance/NanoLaboのインストールが終了します。

続けて、Advance/NanoLabo Toolのインストーラーを実行します。

.. code-block:: console

 $ ./install_nanolabo_tool_linux.bin

画面の指示に従い、インストールの設定を行ってください。インストール先として、Advance/NanoLaboと同じ場所を選択してください。

.. image:: /img/install_tool_l.png

インストール後、最後の画面で完了をクリックすると、Advance/NanoLabo Toolのインストールが終了します。

.. _licensel:

ライセンスの設定
=============================

ライセンス登録後、原則5営業日以内にライセンスファイル( :file:`nanolabo.lic` )をお送りします。インストール先の :file:`license` ディレクトリにコピーしてください。

本ソフトウェアのライセンス認証は、ライセンスサーバー（ライセンス認証用のプログラム）により行われます。本ソフトウェアの起動時に自動的にライセンスサーバーが起動されますので、通常はライセンスサーバーの操作を行っていただく必要はございません。

.. hint::

 手動でライセンスサーバーを操作することも可能です。

 - Windowsから操作する場合

  弊社ツール\ `remoteLicense <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を使うことで、Windows上から簡単にLinuxマシン上のライセンスサーバーの起動・終了・状態確認ができます。詳細は\ `マニュアル <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を参照してください。

 - Linux上で操作する場合

  ライセンスサーバーの実行ファイルはインストール先の :file:`exec.LINUX/flex/lmgrd` です。端末（ターミナル）でインストール先のディレクトリに移動したら、以下のコマンド例のように起動します。

  .. code-block:: console

   $ exec.LINUX/flex/lmgrd -c license/nanolabo.lic -l lmgrd.log

  ライセンスサーバーの状態を表示するには、インストール先の :file:`exec.LINUX/flex/lmstat` を使用します。

  .. code-block:: console

   $ exec.LINUX/flex/lmstat -a -c license/nanolabo.lic

  また、ライセンスサーバーを終了するには、インストール先の :file:`exec.LINUX/flex/lmdown` を使用します。

  .. code-block:: console

   $ exec.LINUX/flex/lmdown -c license/nanolabo.lic

.. _floating:

フローティングライセンス
-----------------------------

Linuxマシンに対して発行されたライセンスはフローティングライセンスとなっており、ネットワーク接続された別のマシン上（Windows・Linux）でNanoLaboを使うことができます。

- ライセンスサーバーとして使うマシン側

 別のWindowsマシンからremoteLicenseを使うか、またはそのマシンにNanoLaboをインストールして、ホストIDの取得・ライセンス登録を行ってください。ライセンスファイル取得後、remoteLicenseを使うか、またはマシン上で直接ライセンスサーバーを起動してください。

- NanoLaboを使うクライアントマシン側

 NanoLaboをインストールして、同じライセンスファイルをインストール先の :file:`license` ディレクトリにコピーしてください。

ライセンス認証がうまくいかない場合は、以下をご確認ください。

- クライアントからライセンスサーバーへの接続には、ライセンスファイル中に書かれたホスト名を使用します。ホスト名を使った接続ができない場合、ファイル中のホスト名をIPアドレスに書き換えることで接続できるようになることがあります。

- ライセンスサーバー起動中はライセンスマネージャーデーモン :file:`lmgrd` とベンダーデーモン :file:`advanced` の2つのプロセスが起動し、それぞれがネットワーク通信を行います。使用するポート番号は動的に決まります（\ :file:`lmgrd` は27000-27009番ポートを使用）が、ファイアウォールの設定等のためにポート番号を固定したい場合は、ライセンスファイル中に追記して指定することができます。

- ライセンスファイルはテキストファイルですので通常のテキストエディタで編集できます。ホスト名の変更・ポート番号の追記でライセンスの再発行は必要ありません。サーバー側・クライアント側両方で同じように変更してください。

 .. table::

  +-----------------------------------------------------------------------------+
  | lmgrdが30000番、advancedが30001番ポートを使うように設定する例               |
  +=============================================================================+
  || SERVER (ホスト名) COMPOSITE=(ホストID) |portlmgrd|                         |
  || VENDOR advanced |portadvanced|                                             |
  || USE_SERVER                                                                 |
  || FEATURE ...                                                                |
  +-----------------------------------------------------------------------------+

- クライアント側でNanoLaboを起動したときに、ライセンスサーバーが終了してしまう場合があります。ライセンスサーバーの起動時に :file:`lmgrd` のオプション ``-local`` を付けることで、クライアント側から終了されないようにすることができます。

.. |portlmgrd| raw:: html

   <font color="blue">30000</font>

.. |portadvanced| raw:: html

   <font color="blue">PORT=30001</font>

.. _launchl:

起動
=============================

インストール時にショートカットを作成した場合は、ショートカットから起動してください。

直接起動する場合は、端末（ターミナル）でインストール先の :file:`bin` ディレクトリに移動し、 :file:`nanolabo.sh` を起動してください。

.. code-block:: console

 $ ./nanolabo.sh

.. _fix3ddisplay:

3Dモデルが表示されない場合
--------------------------------

Java VMの引数を追加することで表示が改善します。

画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Java VM` を開き、 :guilabel:`Arguments for Java VM` に ``-Dprism.forceGPU=true`` を追加します。その後 :guilabel:`OK` をクリックしてNanoLaboを再起動してください。

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. _ocpl:

（任意）グラフニューラルネットワーク汎用力場の設定
====================================================

LAMMPSの計算でグラフニューラルネットワーク汎用力場を使うためには、別途Python環境での設定が必要です。設定方法は\ :doc:`Open Catalyst Projectの設定 </usage/ocp>`\ 、\ :doc:`M3GNetの設定 </usage/m3gnet>`\ をそれぞれ参照してください。

.. _sshl:

（任意）リモート計算の設定
=================================================

NanoLaboからリモートのマシンに計算ジョブを投入する場合、SSH接続の設定が必要です。設定方法は\ :doc:`こちら </usage/sshserver>`\ を参照してください。

.. _upgradel:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。ライセンスファイルのみ置き換えてください。

- 新しいバージョンにアップデートされる場合、上書きインストールが可能です。

- NanoLaboと同時にNanoLabo Toolが更新されている場合は、そちらもアップデートしてください。最新版のNanoLabo Toolに同梱されている計算エンジンでの使用を想定しています。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _uninstalll:

アンインストール
=============================

端末（ターミナル）でインストール先の :file:`_NanoLabo_Tool_installation` ディレクトリにある :file:`Change NanoLabo Tool Installation` を起動します。

.. code-block:: console

 $ AdvanceSoft/NanoLabo/_NanoLabo_Tool_installation/Change\ NanoLabo\ Tool\ Installation

画面の指示に従い、アンインストールを行ってください。

Advance/NanoLabo Toolのアンインストールが終わったら、同様にAdvance/NanoLaboをアンインストールしてください。

.. note::

   アンインストールの際に、インストール先のライセンスファイルは削除されずに残ります。また、インストールログファイルが残る場合があります。その際はお手数ですが手動で削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所（ :file:`ホームディレクトリ/.nanolabo` ）に保存され、アンインストール時には削除されません。必要に応じ、手動で削除してください。