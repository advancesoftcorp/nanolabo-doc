.. _ocp:

===========================================================
Open Catalyst Project汎用力場のためのPython設定
===========================================================

Open Catalyst Projectで公開されている\ `インストール手順 <https://github.com/Open-Catalyst-Project/ocp/tree/master#installation>`_\ に沿って、LAMMPSから汎用力場を使うために必要な設定手順を説明します。

実際に計算を行うマシン（計算サーバーにジョブ投入する場合には、その計算サーバー上）でインストールを行ってください。

#. （任意）CUDAの用意

     GPUを使って計算を行うには、CUDA Toolkitがインストールされている必要があります。

     NVIDIAの\ `ダウンロードページ <https://developer.nvidia.com/cuda-toolkit-archive>`_\ からCUDA Toolkit 10.2をダウンロードし、インストールしてください。

     NVIDIAドライバがインストールされていない場合は、そちらもインストールしてください。

#. conda環境の用意

     Python環境としてcondaを使用します。現在condaをお使いでない場合は、必要最小限の構成であるMinicondaを推奨します。

     `Minicondaのページ <https://docs.conda.io/en/latest/miniconda.html>`_\ からインストーラーをダウンロードし、インストールしてください。

     Windowsで環境変数 :envvar:`PATH` を変更しない設定でインストールした場合、以降の作業はスタートメニューからAnaconda Promptを起動して行ってください。

#. ocp-modelsリポジトリの用意

     gitコマンドが使える場合は

     .. code-block:: console

         git clone https://github.com/Open-Catalyst-Project/ocp.git

     または https://github.com/Open-Catalyst-Project/ocp/archive/refs/heads/master.zip をダウンロード・解凍します。

#. インストール

     リポジトリのフォルダに移動し、

     .. code-block:: console

         pip install conda-merge

     を実行します。次に、ocp-models仮想環境を作成します。

     .. code-block:: console
        :caption: CPUで計算を行う（GPUを使わない）場合

         conda-merge env.common.yml env.cpu.yml > env.yml
         conda env create -f env.yml
         conda activate ocp-models

     .. code-block:: console
        :caption: GPUで計算を行う場合

         conda-merge env.common.yml env.gpu.yml > env.yml
         conda env create -f env.yml
         conda activate ocp-models

     .. code-block:: console
        :caption: macOSで、かつCPUで計算を行う場合

         conda env create -f env.common.yml
         conda activate ocp-models
         MACOSX_DEPLOYMENT_TARGET=10.9 CC=clang CXX=clang++ pip install torch-cluster torch-scatter torch-sparse torch-spline-conv -f https://pytorch-geometric.com/whl/torch-1.8.0+cpu.html

     最後に

     .. code-block:: console

         pip install -e .

     を実行してリポジトリの内容をパッケージとしてインストールします。

     .. hint::

         ここで作成したocp-models仮想環境を削除するには、

         .. code-block:: console

             conda deactivate
             conda remove -n ocp-models --all

         を実行します。

     学習済みのモデル（ptファイル）はNanoLabo Toolに同梱されているため、ダウンロードの手順を行う必要はありません。

#. NanoLaboへの設定

     ローカル（NanoLaboを使っているマシン）で実行する場合

         :menuselection:`左上メニュー --> Properties --> Python` （またはForce Field設定画面の :guilabel:`Setting Python` ボタン）でpython実行ファイルのパスを設定します。 :file:`condaのインストール先/envs/ocp-models/python` にあります。

     リモート（計算サーバー等）で実行する場合

         :menuselection:`左上メニュー --> Network --> SSH server` から、ジョブスクリプトにocp-models仮想環境を使うための設定を追加します。

         .. code-block:: console

             . (condaのインストール先)/etc/profile.d/conda.sh
             conda activate ocp-models

         condaのインストール先が :file:`~/anaconda3` または :file:`~/miniconda3` の場合は、デフォルトで追加される :envvar:`LD_LIBRARY_PATH` で動作しますので、上記の設定のみで大丈夫です。

         他の場所にインストールした場合は、加えて以下のように :envvar:`LD_LIBRARY_PATH` を追加してください。

         .. code-block:: console

             export LD_LIBRARY_PATH=(condaのインストール先)/envs/ocp-models/lib:$LD_LIBRARY_PATH
