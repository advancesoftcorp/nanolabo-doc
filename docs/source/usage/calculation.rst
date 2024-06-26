.. _calculation:

=====================
計算実行
=====================

プロジェクト画面左下のメニュー |projectmenuicon| から :guilabel:`Run` をクリックすると、計算ジョブの設定を行う :guilabel:`Run a job` ウィンドウが表示されます。

.. |projectmenuicon| image:: /img/projectmenuicon.png

- Job Type
   （\ `Quantum ESPRESSO <https://www.quantum-espresso.org/>`_\ ・\ `ThreeBodyTB <https://pages.nist.gov/ThreeBodyTB.jl/>`_\ のみ）計算エンジンでどの計算を行うか選択します。

- Host Name
   計算をどのコンピューターで実行するか選択します。ローカル実行（このコンピューターで実行）する場合は :guilabel:`localhost` 、リモート実行（別のコンピューターで実行）する場合はそのホスト名を選択します。
   
   リモート実行のホスト・キューは、事前に設定画面から追加してください。

 .. toctree::
    :maxdepth: 1

    sshserver

- Queue Type
   （リモート実行時のみ）使用するキューを選択します。

- #Processes
- #Threads
   （ローカル実行時のみ）並列計算を行う場合、並列数を設定します。

   .. hint::
      
    :guilabel:`#Threads` は1プロセスあたりのスレッド数です。(\ :guilabel:`#Processes` :math:`\times` :guilabel:`#Threads`\ ) のスレッドが生成されて計算を実行します。

    例えば12コアCPUのマシンの場合、MPI並列のみを使う場合は :guilabel:`#Processes` = 12, :guilabel:`#Threads` = 1、MPI並列とOpenMP並列を併用する場合（ハイブリッド並列）は :guilabel:`#Processes` = 6, :guilabel:`#Threads` = 2などのように設定します。最適な組み合わせはマシン環境により異なります。

- Project
   プロジェクトが保存されていない場合は、 :guilabel:`Save Project` ボタンをクリックして保存してから計算を実行してください。

設定が終わったら、 :guilabel:`OK` をクリックしてください。

ここで、LAMMPS実行時には入力ファイル、リモート実行時にはジョブスクリプトの内容を確認する画面がそれぞれ表示されます。必要に応じてこの場で内容を編集することもできます（変更は今回の実行に限り適用され、プロジェクトやサーバー設定には反映されません）。 :guilabel:`OK` をクリックすると計算が実行されます。

.. hint:: LAMMPSの入力ファイル確認画面は表示しない設定にできます。画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> LAMMPS` を開き、 :guilabel:`Input File Editor` で設定を変更できます。

.. hint:: リモート実行時には、自動的に計算エンジンの実行ファイルをサーバーに転送して実行します。事前にサーバーに計算エンジンをインストールしておく必要はありません。

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. _job:

計算ジョブ管理
======================

実行中・実行待機中の計算ジョブは、エクスプローラーの :guilabel:`Calculating` に一覧表示されます。各計算ジョブは3Dモデルのアイコンで表示され、左上には計算エンジン、右下には計算の種類を示すラベルが表示されています。リモート実行ジョブには右上に雲のアイコン |cloud| が表示されます。

ローカル実行ジョブは1つずつ順に実行されます。右下のラベルの色は計算ジョブの状態を示しており、赤色が実行中、黄色が実行待機中です。ジョブが終了すると、ラベルが緑色になり、 Calculating から消えます。実行前にキャンセルされたリモート実行ジョブは、ラベルが灰色になります。

.. image:: /img/job.svg

実行中・実行待機中の計算ジョブを中止するには、アイコンを右クリックして :guilabel:`Delete jobs` をクリックするか、プロジェクト画面を開き、画面右側のパネルの :guilabel:`Stop Calculation` をクリックしてください。（結果画面が表示されていない場合は、まず左下のメニュー |projectmenuicon| から :guilabel:`Result` をクリックしてください。）

.. |cloud| image:: /img/cloud.png

.. _localjobmanager:

ローカルジョブマネージャー
=================================

ローカル実行ジョブは、NanoLaboを終了すると同時に終了します（確認が表示されます）。

Linuxの場合は、 :guilabel:`Job Manager` を使うことにより、ジョブをNanoLaboから切り離して実行し、NanoLaboを終了しても計算が続くようにすることができます。

画面左上のアイコン |mainmenuicon| から :menuselection:`Job Manager` を開き、 :guilabel:`Job Manager` をRawに設定してください。 :guilabel:`Job Queue` の |add| ボタンからキューを追加し、 :guilabel:`Job Script` 内で並列数や、実行に必要な環境変数等があれば設定してください。

また、ローカルでジョブ管理システムをお使いの場合は、 :guilabel:`Job Manager` をPBS、SLURM、PJMに設定することでローカルにジョブ投入をすることもできます。

実行時には、 :guilabel:`Host Name` はlocalhostにして、 :guilabel:`Queue Type` で追加したキュー名を指定してください。

:guilabel:`Job Manager` をBuild-inに戻すと、ジョブをNanoLabo上で実行する設定に戻ります。

.. |add| image:: /img/add.png

.. _localgpu:

GPU使用の設定
====================

LinuxマシンでGPUが搭載されている場合、Advance/NeuralMD関連の計算をGPUを使ってより高速に実行することができます。対応しているのは、Advance/NeuralMDを使ったニューラルネットワーク力場の学習（Advance/NeuralMD Pro版のライセンスが必要）、およびNeuralMD力場を使ったLAMMPSによる分子動力学計算です。

画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Advance/NeuralMD` を開き、 :guilabel:`Number of GPUs` でGPUの数を設定してください。0を設定するとGPUを使用しません。

.. note::

 GPUドライバを事前にインストールしておく必要があります。CUDA 11.4.4を使用しており、これに対応するドライババージョン470.82.01以上が必要です。

.. hint:: ここでの設定はAdvance/NeuralMD関連の計算にのみ適用されます。それ以外のグラフニューラルネットワーク力場のGPU使用の設定とは独立しています。これらのGPU使用についてはそれぞれの環境設定方法を参照してください。

.. _error:

計算がうまくいかない場合
==============================

計算が正常に実行できなかった場合、 :guilabel:`Error` ウィンドウが表示されます。エラーの内容を確認するには、プロジェクト画面を開き、 :guilabel:`CRASH` や :guilabel:`ERR` をクリックして、エラーログを表示してください。（結果画面が表示されていない場合は、まず左下のメニュー |projectmenuicon| から :guilabel:`Result` をクリックしてください。）

.. _frequent_mistake:

よくある設定ミス
-------------------------

- 過剰なプロセス数

 計算の種類により、MPI並列（プロセス並列）数には上限があります。一般に計算対象のモデルサイズが小さいほど並列化の上限は小さくなり、並列数を大きく設定しすぎるとエラー終了するなどの問題が生じます。

 プロセス数は、ローカル実行時は :guilabel:`#Processes` 、リモート実行時は ``mpirun`` コマンドの引数等で設定します。

- 過剰なスレッド数

 スレッド数は通常、1プロセスあたりの数で指定します。MPI並列（プロセス並列）とOpenMP並列（スレッド並列）を併用する場合、スレッドの総数はプロセス並列数×スレッド並列数となり、この数がCPUコア数を超えると、計算が著しく遅くなったり、エラー終了するなどの問題が生じます。

 スレッド数は、ローカル実行時は :guilabel:`#Threads` 、リモート実行時は環境変数 :envvar:`OMP_NUM_THREADS` 等で設定します。特にリモート実行時は、明示的に設定しないとシステムのデフォルト値が使われ、意図せずスレッド数が過剰になってしまう場合があります。

.. _firewall:

ファイアウォールの設定
-------------------------

Windowsで、実行時にファイアウォールの警告が表示される場合があります。これはMPIライブラリが受信の待ち受けを行うためです。「アクセスを許可する」か、または計算エンジンの実行ファイルをあらかじめファイアウォールの例外に追加しておくことで、警告が表示されなくなります。
