.. _ocp:

===========================================================
Open Catalyst Project汎用力場を使うための設定
===========================================================

.. _ocppython:

Pythonの設定
===============

Open Catalyst Projectで公開されている\ `インストール手順 <https://github.com/Open-Catalyst-Project/ocp/tree/main#installation>`_\ に沿って、LAMMPSから汎用力場を使うために必要な設定手順を説明します。

実際に計算を行うマシン（計算サーバーにジョブ投入する場合には、その計算サーバー上）でインストールを行ってください。

.. hint:: Open Catalyst Projectのリポジトリは継続的に更新されており、このページで説明するインストール手順は最新でない場合があります。インストール・実行がうまくいかない場合は元のインストール手順もご参照ください。

#. （任意）CUDAの用意

     GPUを使って計算を行うには、CUDA Toolkitがインストールされている必要があります。

     NVIDIAの\ `ダウンロードページ <https://developer.nvidia.com/cuda-toolkit-archive>`_\ からCUDA Toolkit 11.6をダウンロードし、インストールしてください。

     NVIDIAドライバがインストールされていない場合は、そちらもインストールしてください。

#. conda環境の用意

     Python環境としてcondaを使用します。現在condaをお使いでない場合は、必要最小限の構成であるMinicondaを推奨します。

     `Minicondaのページ <https://docs.conda.io/en/latest/miniconda.html>`_\ からPython 3.9のインストーラーをダウンロードし、インストールしてください。

     Windowsで環境変数 :envvar:`PATH` を変更しない設定でインストールした場合、以降の作業はスタートメニューからAnaconda Promptを起動して行ってください。

#. ocp-modelsリポジトリの用意

     gitコマンドが使える場合は

     .. code-block:: console

         git clone https://github.com/Open-Catalyst-Project/ocp.git

     または https://github.com/Open-Catalyst-Project/ocp/archive/refs/heads/main.zip をダウンロード・解凍します。

#. インストール

     リポジトリのフォルダに移動し、まずはインストールに使用するパッケージをインストールします。

     .. code-block:: console

         conda install mamba conda-merge -n base -c conda-forge

     次に、ocp-models仮想環境の作成に必要なパッケージが書かれたファイル :file:`env.yml` を出力します。

     .. code-block:: console
        :caption: CPUで計算を行う（GPUを使わない）場合

         conda-merge env.common.yml env.cpu.yml > env.yml

     .. code-block:: console
        :caption: GPUで計算を行う場合

         conda-merge env.common.yml env.gpu.yml > env.yml

     ここで環境により、 :file:`env.yml` を開いて修正します。

     Windowsの場合は、一部のパッケージについて指定されたバージョンが存在しないため、次の2行を変更してください。

     .. code-block:: none
         :caption: 変更前

         - pyg=2.2.0
         - pytorch=1.13.1

     .. code-block:: none
         :caption: CPUで計算を行う場合

         - pyg=*=*cpu*
         - pytorch=1.12

     .. code-block:: none
         :caption: GPUで計算を行う場合

         - pyg
         - pytorch=1.12

     また、CPUで計算を行う場合、関連ライブラリのCPUバージョンを明示的に指定するため、次の4行を ``dependencies:`` のリスト内に追加してください（\ ``- pytorch=``\ の行の前後に追加すると分かりやすいです）。

     .. code-block:: none

         - pytorch-cluster=*=*cpu*
         - pytorch-scatter=*=*cpu*
         - pytorch-sparse=*=*cpu*
         - pytorch-spline-conv=*=*cpu*

     その後、実際に仮想環境を作成します。

     .. code-block:: console

         mamba env create -f env.yml

     パッケージのダウンロード・インストールが行われるため、時間がかかります。

     成功したら、ocp-models仮想環境に入り、リポジトリの内容をパッケージとしてインストールします。

     .. code-block:: console

         conda activate ocp-models
         pip install -e .

     .. hint::

         以下のようなエラーが出た場合、 :file:`env.yml` で指定されているパッケージのバージョンを変更することで解消する場合があります。

         .. code-block:: console

             Could not solve for environment specs
             Encountered problems while solving:
               - nothing provides requested （パッケージ名） （バージョン）

         利用可能なパッケージのバージョンを検索するには、以下のコマンドを実行します。

         .. code-block:: console

             mamba search -c pytorch -c nvidia -c pyg -c conda-forge -c defaults （パッケージ名）

         :file:`env.yml` で該当するパッケージのバージョンを変更したら、環境の作成を再試行します。

         .. code-block:: console

             mamba env update -f env.yml

         ただし、指定されたものと異なるバージョンのパッケージで環境を作成した場合、正常に動作しない可能性がありますので、注意して動作確認を行ってください。

     .. hint::

         ここで作成したocp-models仮想環境を削除するには、

         .. code-block:: console

             conda deactivate
             mamba remove -n ocp-models --all

         を実行します。

     学習済みのモデル（ptファイル）はNanoLabo Toolに同梱されているため、ダウンロードの手順を行う必要はありません。

.. _ocpnanolabo:

NanoLaboへの設定
====================

- ローカル（NanoLaboを使っているマシン）で実行する場合

      画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Python` （またはForce Field設定画面の :guilabel:`Setting Python` ボタン）でpython実行ファイルのパスを設定します。

      Windowsでは :file:`condaのインストール先\\envs\\ocp-models\\python.exe` 、Linux・macOSでは :file:`condaのインストール先/envs/ocp-models/bin/python` にあります。

- リモート（計算サーバー等）で実行する場合

     condaのインストール先が :file:`~/anaconda3` または :file:`~/miniconda3` の場合は、デフォルトで追加される :envvar:`LD_LIBRARY_PATH` で動作しますので、設定は必要ありません。

     他の場所にインストールした場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server` を開き、ジョブスクリプトに :envvar:`LD_LIBRARY_PATH` を追加してください。

     .. code-block:: console

         export LD_LIBRARY_PATH=(condaのインストール先)/envs/ocp-models/lib:$LD_LIBRARY_PATH

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. _ocplammps:

LAMMPSを直接実行する場合
===========================

NanoLabo Tool同梱の実行ファイル :file:`lammps_oc20` を使用します。MPI並列計算、ビリアル応力の計算（NPT・NPHアンサンブル、セル最適化）には非対応です。

Linux・macOSでは、実行時にPythonの動的ライブラリを使用しますので、環境変数 :envvar:`LD_LIBRARY_PATH` を設定してください。

.. code-block:: console

 $ export LD_LIBRARY_PATH=(condaのインストール先)/envs/ocp-models/lib:$LD_LIBRARY_PATH

また、Linuxでは環境変数 :envvar:`OPAL_PREFIX` を設定してください。

.. code-block:: console
 :caption: デフォルトの場所にインストールした場合の例

 $ export OPAL_PREFIX=/opt/AdvanceSoft/NanoLabo/exec.LINUX/mpi

LAMMPSから :file:`oc20_driver.py` を呼び出すことで動作しますので、NanoLabo Toolインストール先の :file:`oc20driver` フォルダをPythonのモジュール検索パスに追加してください。例えば、環境変数 :envvar:`PYTHONPATH` に追加します。

.. code-block:: console
 :caption: Linuxの例

 $ export PYTHONPATH=(NanoLabo Toolのインストール先)/oc20driver:$PYTHONPATH

LAMMPSの入力ファイル中で、以下のように\ ``pair_style``\ を設定します。

.. code-block:: none
 :caption: CPUで計算を行う（GPUを使わない）場合

 pair_style oc20
 pair_coeff * * <model> <元素名1 元素名2 ...>

.. code-block:: none
 :caption: GPUで計算を行う場合

 pair_style oc20/gpu
 pair_coeff * * <model> <元素名1 元素名2 ...>

パラメーター

 .. table::
  :widths: auto

  +--------------------+-------------------------------------------------------------------------------------------------+
  | model              || 使用するグラフニューラルネットワークのモデル                                                   |
  |                    || DimeNet++, GemNet-dT_OC20, GemNet-dT_OC22, CGCNN, SchNet, SpinConv のいずれかを指定            |
  |                    || （GemNet-dTを指定した場合、GemNet-dT_OC20を使用します）                                        |
  +--------------------+-------------------------------------------------------------------------------------------------+
  | 元素名             | LAMMPSのatom type毎に、対応する元素名を列挙                                                     |
  +--------------------+-------------------------------------------------------------------------------------------------+
