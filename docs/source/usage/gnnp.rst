.. _gnnp:

===========================================================
汎用グラフニューラルネットワーク力場を使うための設定
===========================================================

オープンソースの汎用グラフニューラルネットワーク(GNN)力場はPythonで開発されており、Python環境側の設定・インストールは事前に行っていただく必要があります。

NanoLaboに同梱されているLAMMPSからPython環境の各力場パッケージを呼び出し、計算を実行します。

.. _gnnppython:

Python環境の準備
==================

実際に計算を行うマシン（計算サーバーにジョブ投入する場合には、その計算サーバー上）でインストールを行ってください。

#. conda環境の用意

     Python環境としてcondaを使用します。現在condaをお使いでない場合は、必要最小限の構成であるMinicondaを推奨します。

     `Minicondaのページ <https://docs.conda.io/en/latest/miniconda.html>`_\ からPython 3.11のインストーラーをダウンロードし、インストールしてください。

     Windowsで環境変数 :envvar:`PATH` を変更しない設定でインストールした場合、以降の作業はスタートメニューからAnaconda Promptを起動して行ってください。

     インターネット接続にプロキシが必要な場合は、環境変数の設定等を適宜行ってください。

     .. code-block:: console
      :caption: Windows・認証なしの例

      set HTTP_PROXY=http://host:port
      set HTTPS_PROXY=http://host:port

     .. code-block:: console
      :caption: Linux・認証ありの例

      export HTTP_PROXY=http://user:pass@host:port
      export HTTPS_PROXY=http://user:pass@host:port

#. 仮想環境の作成と操作

     力場パッケージの依存関係により、同じPython環境に複数の力場パッケージをインストールできないことがあります。condaで仮想環境を作ることにより、別々の環境に力場パッケージをインストールすることができるようになります。

      .. code-block:: console
       :caption: 作成

       conda env create -n （仮想環境名） python=3.11

      - 作成時点ではまだ仮想環境に入っていません。

      .. code-block:: console
       :caption: 仮想環境に入る

       conda activate （仮想環境名）

      - プロンプトの前に仮想環境名が表示されます。この状態でインストール操作を行うことで、その仮想環境内にインストールされます。

      .. code-block:: console
       :caption: 仮想環境から出る

       conda deactivate

      .. code-block:: console
       :caption: 削除

       conda remove -n （仮想環境名） --all

      .. code-block:: console
       :caption: 一覧

       conda env list

#. GPUを使う場合

     各GNN力場はPyTorchを使って実装されており、GPU版PyTorchを使うことで計算を高速化することができます。

     NVIDIAドライバがインストールされていない場合は、あらかじめインストールしてください。

     GPUを使う場合のインストール方法は各パッケージのドキュメントで指定されている場合もありますが、説明がない場合は、力場パッケージをインストールする前に（仮想環境を使う場合は力場パッケージと同じ仮想環境に）PyTorchのGPU版をインストールします。最新版は `Get Started <https://pytorch.org/get-started>`__ 、そうでない場合は `Previous Versions <https://pytorch.org/get-started/previous-versions/>`_ を参照し、CUDAバージョンに合わせたインストールコマンドを実行してください。PyTorchのバージョンは力場パッケージによって指定されている場合がありますので、それに従ってください。

     インストール後、GPUが利用可能になっているかどうかPythonの対話環境で確認できます。

     .. code-block:: python

      python

      >>> import torch
      >>> print(torch.cuda.is_available())   #GPU使用可否
      True
      >>> exit()                             #Python環境終了

#. DFT-D3補正を使う場合

     （仮想環境を使う場合は力場パッケージと同じ仮想環境に）torch-dftdパッケージをインストールしてください。

     .. code-block:: console

       pip install torch-dftd

.. _gnnpinstall:

各力場パッケージのインストール
================================

.. hint:: 各パッケージは継続的に更新されており、このページで説明するインストール手順は最新でない場合があります。インストール・実行がうまくいかない場合は元のインストール手順もご参照ください。

- MatGL

   `ドキュメント <https://matgl.ai/>`__ `GitHubリポジトリ <https://github.com/materialsvirtuallab/matgl>`__

   （仮想環境を使う場合は仮想環境に入ってから）次のコマンドを実行してください。

   .. code-block:: console
    :caption: GPUを使う場合

    pip install torch==2.2.0 --index-url https://download.pytorch.org/whl/cu121
    pip install dgl -f https://data.dgl.ai/wheels/cu121/repo.html
    pip install dglgo -f https://data.dgl.ai/wheels-test/repo.html

   .. code-block:: console

    pip install matgl

- CHGNet

   `ドキュメント <https://chgnet.lbl.gov/>`__ `GitHubリポジトリ <https://github.com/CederGroupHub/chgnet>`__

   （仮想環境を使う場合は仮想環境に入ってから）次のコマンドを実行してください。

   .. code-block:: console

    pip install chgnet

- MACE

   `ドキュメント <https://mace-docs.readthedocs.io/en/latest/>`__ `GitHubリポジトリ <https://github.com/ACEsuit/mace>`__

   （仮想環境を使う場合は仮想環境に入ってから）次のコマンドを実行してください。

   .. code-block:: console

    pip install mace-torch

- Orb

   `GitHubリポジトリ <https://github.com/orbital-materials/orb-models>`__

   （仮想環境を使う場合は仮想環境に入ってから）次のコマンドを実行してください。

   .. code-block:: console

    pip install orb-models

   大きい系（周期境界条件の場合5000原子以上）のシミュレーションにはcuML（GPU使用）をインストールすることが推奨されています。

   .. code-block:: console

    pip install --extra-index-url=https://pypi.nvidia.com "cuml-cu11==25.2.*"  # For cuda versions >=11.4, <11.8
    pip install --extra-index-url=https://pypi.nvidia.com "cuml-cu12==25.2.*"  # For cuda versions >=12.0, <13.0

- MatterSim

   `ドキュメント <https://microsoft.github.io/mattersim/>`__ `GitHubリポジトリ <https://github.com/microsoft/mattersim>`__

   （仮想環境を使う場合は仮想環境に入ってから）次のコマンドを実行してください。

   .. code-block:: console

    pip install mattersim

- FAIR-Chem

   `ドキュメント <https://fair-chem.github.io/>`__ `GitHubリポジトリ <https://github.com/FAIR-Chem/fairchem>`__

   FAIR-Chemでは、環境ファイルから仮想環境を作成するインストール手順が示されています。 実行するとfair-chemという名前の仮想環境が作成されます。

   .. code-block:: console
    :caption: GPUを使う場合

    curl -O https://raw.githubusercontent.com/FAIR-Chem/fairchem/main/packages/env.gpu.yml
    # CUDAバージョンを変える場合はpytorch-cudaのバージョンを編集
    conda env create -f env.gpu.yml

   .. code-block:: console
    :caption: GPUを使わない場合

    curl -O https://raw.githubusercontent.com/FAIR-Chem/fairchem/main/packages/env.cpu.yml
    conda env create -f env.cpu.yml

   Open Materialsの学習済みモデル（モデル名にOMatを含むもの）はHugging Faceのアカウント作成と使用条件への同意が必要です。\ `fairchem/OMAT24 <https://huggingface.co/fairchem/OMAT24>`__\ を参照してください。ダウンロードしたチェックポイントファイルをNanoLaboインストール先の :file:`gnnp/fairchem-omat24` フォルダに配置してください。

.. _gnnpnanolabo:

NanoLaboへの設定
====================

- ローカル（NanoLaboを使っているマシン）で実行する場合

      画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Python` （またはForce Field設定画面の |gearicon| ボタン）でpython実行ファイルのパスを設定します。

      Windowsでは :file:`condaのインストール先\\python.exe` 、Linux・macOSでは :file:`condaのインストール先/bin/python` にあります。

      また、仮想環境にインストールした場合、Windowsでは :file:`condaのインストール先\\envs\\仮想環境名\\python.exe` 、Linux・macOSでは :file:`condaのインストール先/envs/仮想環境名/bin/python` を設定してください。

- リモート（計算サーバー等）で実行する場合

     :envvar:`LD_LIBRARY_PATH` にPython環境のlibフォルダを追加する必要があります。

     以下のフォルダはNanoLaboによって自動的にジョブスクリプトに追加されます。※仮想環境名の部分は力場の設定に応じたものが入ります。

     * :file:`$\\{HOME\\}/miniconda3/lib``
     * :file:`$\\{HOME\\}/anaconda3/lib`
     * :file:`$\\{HOME\\}/miniconda3/envs/\\{m3gnet,chgnet,mace,orb,mattersim,fairchem\\}/lib`
     * :file:`$\\{HOME\\}/anaconda3/envs/\\{m3gnet,chgnet,mace,orb,mattersim,fairchem\\}/lib`

     他の場所にインストールした場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server` を開き、ジョブスクリプトに :envvar:`LD_LIBRARY_PATH` を追加してください。

     .. code-block:: console

         export LD_LIBRARY_PATH=(condaのインストール先)/lib:$LD_LIBRARY_PATH

     .. code-block:: console
      :caption: 仮想環境にインストールした場合

         export LD_LIBRARY_PATH=(condaのインストール先)/envs/(仮想環境名)/lib:$LD_LIBRARY_PATH

.. |mainmenuicon| image:: /img/mainmenuicon.png
.. |gearicon| image:: /img/gear.png

.. _gnnpimport:

モデルファイルのインポート
=============================

ファインチューニングしたモデルや第三者の配布モデルを使う場合など、 :guilabel:`Model` リストボックスにないモデルを使いたい場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Import --> Import GNNP model` でモデルファイルをインポートしてください。インポートしたモデルは :guilabel:`Model` リストボックスに追加され、選択できるようになります。

.. _gnnperror:

実行時のエラー
====================

- MatGLで、実行時に次のようなエラーが出る場合があります。

 .. code-block:: none

  ValueError: No valid model found in pre-trained_models at https://github.com/materialsvirtuallab/matgl/raw/main/pretrained_models/.

 これは実行に必要な学習済みのモデルデータが存在しないというメッセージです。m3gnetパッケージにはモデルデータが含まれていないため、初回実行時にダウンロードを試みますが、インターネット接続に問題があると実行できません。

 代替として、モデルデータを手動でダウンロードすることもできます。\ `matglのリポジトリ <https://github.com/materialsvirtuallab/matgl/tree/main/pretrained_models>`_\ に各モデル名のフォルダがありますので、使用するモデルのファイルをダウンロードし、 :file:`(ホームディレクトリ)/.cache/matgl/(モデル名)` に保存してください。

- Windowsで、実行時に次のようなエラーが出る場合があります。

 .. code-block:: none
 
  OMP: Error #15: Initializing libiomp5md.dll, but found libiomp5md.dll already initialized.

 この場合、 :file:`(condaのインストール先)\\Library\\bin\\libiomp5md.dll` をリネーム（例： :file:`libiomp5md.dll_` ）してください。

- DFT-D3を有効にして実行した時に次のようなエラーが出る場合があります。

 .. code-block:: none

  version `GOMP_5.0' not found

 この場合、次の環境変数を設定してください。

 .. code-block:: none

  export LD_PRELOAD=(condaのインストール先)/lib/libgomp.so

- WindowsでGPUを使った場合、次のようなエラーで実行できない場合があります。

 .. code-block:: none

  FileNotFoundError: Could not find module 'C:\Program Files\NVIDIA Corporation\NVSMI\nvml.dll' (or one of its dependencies). Try using the full path with constructor syntax.

 .. code-block:: none

  pynvml.NVMLError_LibraryNotFound: NVML Shared Library Not Found

 この場合、 :file:`C:\\Windows\\System32\\nvml.dll` を :file:`C:\\Program Files\\NVIDIA Corporation\\NVSMI\\nvml.dll` にコピー（フォルダがない場合は作成）してから実行してみてください。

- pymatgen 2024.8.9以降で、実行時に次のようなエラーが出る場合があります。

 .. code-block:: none

  ValueError: Buffer dtype mismatch, expected 'const int64_t' but got 'long'

 .. code-block:: none

  ValueError: Buffer dtype mismatch, expected 'const long' but got 'long long'

 この場合、pymatgenのバージョンを下げることで改善する可能性があります。

 .. code-block:: console

  pip install -U pymatgen==2024.7.18

.. _gnnplammps:

LAMMPSを直接実行する場合
===========================

NanoLaboを使わず、LAMMPS単体で実行する場合の説明です。

NanoLabo Tool同梱の実行ファイル :file:`lammps_gnnp` を使用します。

MPI並列計算には非対応です。力場によっては、ビリアル応力の計算（NPT・NPHアンサンブル、セル最適化）に非対応のものがあります。

.. _gnnpenvvar:

環境変数の設定
---------------------------

実行時にPythonの動的ライブラリを使用しますので、Linux・macOSでは環境変数 :envvar:`LD_LIBRARY_PATH` 、Windowsでは環境変数 :envvar:`PATH` を設定してください。

LinuxではOpenMPIの動的ライブラリが必要ですので、こちらも :envvar:`LD_LIBRARY_PATH` に設定してください。

.. code-block:: console
 :caption: Linuxの例

 $ export LD_LIBRARY_PATH=(condaのインストール先)/envs/(仮想環境名)/lib:(NanoLabo Toolのインストール先)/exec.LINUX/mpi/lib:$LD_LIBRARY_PATH

.. code-block:: console
 :caption: Windowsの例

 > set PATH=(condaのインストール先)/envs/(仮想環境名);%PATH%

また、Linuxでは環境変数 :envvar:`OPAL_PREFIX` を設定してください。

.. code-block:: console
 :caption: デフォルトの場所にインストールした場合の例

 $ export OPAL_PREFIX=/opt/AdvanceSoft/NanoLabo/exec.LINUX/mpi

LAMMPSから :file:`gnnp_driver.py` を呼び出すことで動作しますので、NanoLabo Toolインストール先の :file:`gnnp` フォルダをPythonのモジュール検索パスに追加してください。例えば、環境変数 :envvar:`PYTHONPATH` に追加します。

.. code-block:: console
 :caption: Linuxの例

 $ export PYTHONPATH=(NanoLabo Toolのインストール先)/gnnp:$PYTHONPATH

.. _gnnpinput:

入力ファイルの設定
----------------------------

- 単位系は ``units metal`` を設定してください。

- X, Y, Z方向とも周期境界条件にしてください。

- 以下のように\ ``pair_style``\ を設定します。

.. code-block:: none
 :caption: GNN力場

 pair_style gnnp
 pair_coeff * * <gnnptype> <modelname> <元素名1 元素名2 ...>        # モデル名を指定する例

.. code-block:: none
 :caption: GNN力場 + DFT-D3による補正

 pair_style gnnp/d3
 pair_coeff * * <gnnptype> path <modelfile> <元素名1 元素名2 ...>   # モデルファイルを指定する例

.. code-block:: none
 :caption: GNN力場、GPU使用

 pair_style gnnp/gpu
 pair_coeff * * <gnnptype> <modelname> <元素名1 元素名2 ...>

.. code-block:: none
 :caption: GNN力場 + DFT-D3による補正、GPU使用

 pair_style gnnp/d3/gpu
 pair_coeff * * <gnnptype> <modelname> <元素名1 元素名2 ...>

パラメーター

 .. table::
  :widths: auto

  +--------------------+-------------------------------------------------------------------------------------------------+
  || gnnptype          || 使用するGNN力場の種類                                                                          |
  ||                   || matgl, chgnet, mace, mace-off, orb, mattersim, fairchem                                        |
  +--------------------+-------------------------------------------------------------------------------------------------+
  ||                   || 使用するモデル                                                                                 |
  || modelname         || 各力場で用意されている、使用可能な学習済みモデルの名前を指定                                   |
  || modelfile         || pathに続けてファイルパスを指定すると、ファイルに保存されたモデルを使用                         |
  +--------------------+-------------------------------------------------------------------------------------------------+
  | 元素名             | LAMMPSのatom type毎に、対応する元素名を列挙                                                     |
  +--------------------+-------------------------------------------------------------------------------------------------+

使用可能な学習済みモデルの名前

 - 各力場の更新により、使用可能なモデルが追加・削除される場合があります。最新のリストは各力場のドキュメント・GitHubリポジトリをご確認ください。

 .. table::
  :widths: auto

  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || matgl             || M3GNet-MP-2021.2.8-PES                                                                                                                           |
  ||                   || M3GNet-MP-2021.2.8-DIRECT-PES                                                                                                                    |
  ||                   || M3GNet-MatPES-PBE-v2025.1-PES                                                                                                                    |
  ||                   || M3GNet-MatPES-r2SCAN-v2025.1-PES                                                                                                                 |
  ||                   || CHGNet-MPtrj-2023.12.1-2.7M-PES                                                                                                                  |
  ||                   || CHGNet-MPtrj-2024.2.13-11M-PES                                                                                                                   |
  ||                   || CHGNet-MatPES-PBE-2025.2.10-2.7M-PES                                                                                                             |
  ||                   || CHGNet-MatPES-r2SCAN-2025.2.10-2.7M-PES                                                                                                          |
  ||                   || TensorNet-MatPES-PBE-v2025.1-PES                                                                                                                 |
  ||                   || TensorNet-MatPES-r2SCAN-v2025.1-PES                                                                                                              |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || chgnet            || 0.3.0, 0.2.0                                                                                                                                     |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || mace              || small, medium, large                                                                                                                             |
  ||                   || small-0b, medium-0b                                                                                                                              |
  ||                   || small-0b2, medium-0b2, large-0b2                                                                                                                 |
  ||                   || medium-0b3                                                                                                                                       |
  ||                   || medium-mpa-0                                                                                                                                     |
  ||                   || medium-omat-0                                                                                                                                    |
  ||                   || mace-osaka24-small\ :sup:`*`, mace-osaka24-medium\ :sup:`*`, mace-osaka24-large\ :sup:`*`                                                        |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || mace-off          || small, medium, large                                                                                                                             |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || orb               || orb-v2, orb-d3-v2, orb-d3-sm-v2, orb-d3-xs-v2, orb-mptraj-only-v2                                                                                |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || mattersim         || MatterSim-v1.0.0-1M, MatterSim-v1.0.0-5M                                                                                                         |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
  || fairchem          || CGCNN-S2EF-OC20-200k, CGCNN-S2EF-OC20-2M, CGCNN-S2EF-OC20-20M, CGCNN-S2EF-OC20-All                                                               |
  ||                   || DimeNet-S2EF-OC20-200k, DimeNet-S2EF-OC20-2M                                                                                                     |
  ||                   || SchNet-S2EF-OC20-200k, SchNet-S2EF-OC20-2M, SchNet-S2EF-OC20-20M, SchNet-S2EF-OC20-All                                                           |
  ||                   || DimeNet++-S2EF-OC20-200k, DimeNet++-S2EF-OC20-2M, DimeNet++-S2EF-OC20-20M, DimeNet++-S2EF-OC20-All                                               |
  ||                   || SpinConv-S2EF-OC20-2M, SpinConv-S2EF-OC20-All                                                                                                    |
  ||                   || GemNet-dT-S2EF-OC20-2M, GemNet-dT-S2EF-OC20-All                                                                                                  |
  ||                   || PaiNN-S2EF-OC20-All                                                                                                                              |
  ||                   || GemNet-OC-S2EF-OC20-2M, GemNet-OC-S2EF-OC20-All, GemNet-OC-S2EF-OC20-All+MD, GemNet-OC-Large-S2EF-OC20-All+MD                                    |
  ||                   || SCN-S2EF-OC20-2M, SCN-t4-b2-S2EF-OC20-2M, SCN-S2EF-OC20-All+MD                                                                                   |
  ||                   || eSCN-L4-M2-Lay12-S2EF-OC20-2M                                                                                                                    |
  ||                   || eSCN-L6-M2-Lay12-S2EF-OC20-2M, eSCN-L6-M2-Lay12-S2EF-OC20-All+MD, eSCN-L6-M3-Lay20-S2EF-OC20-All+MD                                              |
  ||                   || EquiformerV2-83M-S2EF-OC20-2M, EquiformerV2-31M-S2EF-OC20-All+MD, EquiformerV2-153M-S2EF-OC20-All+MD                                             |
  ||                   || GemNet-dT-S2EFS-OC22                                                                                                                             |
  ||                   || GemNet-OC-S2EFS-OC22, GemNet-OC-S2EFS-OC20+OC22, GemNet-OC-S2EFS-nsn-OC20+OC22, GemNet-OC-S2EFS-OC20->OC22                                       |
  ||                   || EquiformerV2-lE4-lF100-S2EFS-OC22                                                                                                                |
  ||                   || SchNet-S2EF-ODAC                                                                                                                                 |
  ||                   || DimeNet++-S2EF-ODAC                                                                                                                              |
  ||                   || PaiNN-S2EF-ODAC                                                                                                                                  |
  ||                   || GemNet-OC-S2EF-ODAC                                                                                                                              |
  ||                   || eSCN-S2EF-ODAC                                                                                                                                   |
  ||                   || EquiformerV2-S2EF-ODAC, EquiformerV2-Large-S2EF-ODAC                                                                                             |
  ||                   || EquiformerV2-31M-OMAT24\ :sup:`**`, EquiformerV2-86M-OMAT24\ :sup:`**`, EquiformerV2-153M-OMAT24\ :sup:`**`                                      |
  ||                   || EquiformerV2-31M-OMAT24-MP-sAlex\ :sup:`**`, EquiformerV2-86M-OMAT24-MP-sAlex\ :sup:`**`, EquiformerV2-153M-OMAT24-MP-sAlex\ :sup:`**`           |
  ||                   || EquiformerV2-31M-MP\ :sup:`**`, EquiformerV2-DeNS-31M-MP\ :sup:`**`, EquiformerV2-DeNS-86M-MP\ :sup:`**`, EquiformerV2-DeNS-153M-MP\ :sup:`**`   |
  +--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+

 `*`:sup :file:`gnnp_driver.pyのあるフォルダ/mace-osaka24` にあるモデルファイルを読み込みます。

 `**`:sup: :file:`gnnp_driver.pyのあるフォルダ/fairchem-omat24` にあるモデルファイルを読み込みます。ファイルの入手にはHugging Faceのアカウント作成と使用条件への同意が必要です。\ `fairchem/OMAT24 <https://huggingface.co/fairchem/OMAT24>`__\ を参照してください。

.. hint::

 次のようなエラーで実行できない場合があります。

 .. code-block:: none

  Fatal Python error: init_fs_encoding: failed to get the Python codec of the filesystem encoding
  Python runtime state: core initialized
  ModuleNotFoundError: No module named 'encodings'

 この場合、環境変数 :envvar:`PYTHONHOME` が正しく設定されているかご確認ください。

 .. code-block:: console
  :caption: Windowsの例

  set PYTHONHOME=(condaのインストール先)/envs/(仮想環境名)
