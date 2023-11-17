.. _chgnet:

===========================================================
CHGNet汎用力場を使うための設定
===========================================================

.. _chgnetpython:

Pythonの設定
===============

LAMMPSから\ `CHGNet汎用力場 <https://github.com/CederGroupHub/chgnet>`_\ ＋\ `Simple DFT-D3 <https://dftd3.readthedocs.io/en/latest/>`_\ による補正を使うために必要な設定手順を説明します。

実際に計算を行うマシン（計算サーバーにジョブ投入する場合には、その計算サーバー上）でインストールを行ってください。

#. conda環境の用意

     Python環境としてcondaを使用します。現在condaをお使いでない場合は、必要最小限の構成であるMinicondaを推奨します。

     `Minicondaのページ <https://docs.conda.io/en/latest/miniconda.html>`_\ からPython 3.9のインストーラーをダウンロードし、インストールしてください。

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

#. （任意）GPUを使う場合

     NVIDIAドライバがインストールされていない場合は、あらかじめインストールしてください。

     PyTorchのGPU版をインストールします。CUDAバージョンが最新の場合は `Get Started <https://pytorch.org/get-started>`__ 、そうでない場合は `Previous Versions <https://pytorch.org/get-started/previous-versions/>`_ を参照し、CUDAバージョンに合わせたpipのインストールコマンドを実行してください。

     インストール後、GPUが利用可能になっているかどうかPythonの対話環境で確認できます。

     .. code-block:: python

      python

      >>> import torch
      >>> print(torch.cuda.is_available())   #GPU使用可否
      True
      >>> exit()                             #Python環境終了

#. インストール

     chgnetと、DFT-D3補正に必要なパッケージをインストールします。

     .. code-block:: console

         pip install chgnet
         conda install simple-dftd3 dftd3-python -c conda-forge

.. _chgnetnanolabo:

NanoLaboへの設定
====================

- ローカル（NanoLaboを使っているマシン）で実行する場合

      画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Python` （またはForce Field設定画面の |gearicon| ボタン）でpython実行ファイルのパスを設定します。

      Windowsでは :file:`condaのインストール先\\python.exe` 、Linux・macOSでは :file:`condaのインストール先/bin/python` にあります。

- リモート（計算サーバー等）で実行する場合

     condaのインストール先が :file:`~/anaconda3` または :file:`~/miniconda3` の場合は、デフォルトで追加される :envvar:`LD_LIBRARY_PATH` で動作しますので、設定は必要ありません。

     他の場所にインストールした場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server` を開き、ジョブスクリプトに :envvar:`LD_LIBRARY_PATH` を追加してください。

     .. code-block:: console

         export LD_LIBRARY_PATH=(condaのインストール先)/lib:$LD_LIBRARY_PATH

.. |mainmenuicon| image:: /img/mainmenuicon.png
.. |gearicon| image:: /img/gear.png

.. hint::

 WindowsでGPUを使った場合、次のようなエラーで実行できない場合があります。

 .. code-block:: none

  FileNotFoundError: Could not find module 'C:\Program Files\NVIDIA Corporation\NVSMI\nvml.dll' (or one of its dependencies). Try using the full path with constructor syntax.

 .. code-block:: none

  pynvml.NVMLError_LibraryNotFound: NVML Shared Library Not Found

 この場合、 :file:`C:\\Windows\\System32\\nvml.dll` を :file:`C:\\Program Files\\NVIDIA Corporation\\NVSMI\\nvml.dll` にコピー（フォルダがない場合は作成）してから実行してみてください。

.. _chgnetlammps:

LAMMPSを直接実行する場合
===========================

NanoLaboを使わず、LAMMPS単体で実行する場合の説明です。

NanoLabo Tool同梱の実行ファイル :file:`lammps_chgnet` を使用します。MPI並列計算には非対応です。

Linux・macOSでは、実行時にPythonの動的ライブラリを使用しますので、環境変数 :envvar:`LD_LIBRARY_PATH` を設定してください。

.. code-block:: console

 $ export LD_LIBRARY_PATH=(condaのインストール先)/lib:$LD_LIBRARY_PATH

また、Linuxでは環境変数 :envvar:`OPAL_PREFIX` を設定してください。

.. code-block:: console
 :caption: デフォルトの場所にインストールした場合の例

 $ export OPAL_PREFIX=/opt/AdvanceSoft/NanoLabo/exec.LINUX/mpi

LAMMPSから :file:`chgnet_driver.py` を呼び出すことで動作しますので、NanoLabo Toolインストール先の :file:`chgnet` フォルダをPythonのモジュール検索パスに追加してください。例えば、環境変数 :envvar:`PYTHONPATH` に追加します。

.. code-block:: console
 :caption: Linuxの例

 $ export PYTHONPATH=(NanoLabo Toolのインストール先)/chgnet:$PYTHONPATH

LAMMPSの入力ファイル中で、以下のように\ ``pair_style``\ を設定します。

.. code-block:: none
 :caption: CHGNet

 pair_style chgnet
 pair_coeff * * <modelname> <元素名1 元素名2 ...>        # モデル名を指定する例

.. code-block:: none
 :caption: CHGNet + DFT-D3による補正

 pair_style chgnet/d3
 pair_coeff * * path <modelfile> <元素名1 元素名2 ...>   # モデルファイルを指定する例

.. code-block:: none
 :caption: CHGNet、GPU使用

 pair_style chgnet/gpu
 pair_coeff * * <modelname> <元素名1 元素名2 ...>

.. code-block:: none
 :caption: CHGNet + DFT-D3による補正、GPU使用

 pair_style chgnet/d3/gpu
 pair_coeff * * <modelname> <元素名1 元素名2 ...>

パラメーター

 .. table::
  :widths: auto

  +--------------------+-------------------------------------------------------------------------------------------------+
  ||                   || 使用するグラフニューラルネットワークのモデル                                                   |
  || modelname         || MPtrj-efsmを指定すると、同梱の学習済みモデルを使用                                             |
  || modelfile         || pathに続けてファイルパスを指定すると、ファイルに保存されたモデルを使用                         |
  +--------------------+-------------------------------------------------------------------------------------------------+
  | 元素名             | LAMMPSのatom type毎に、対応する元素名を列挙                                                     |
  +--------------------+-------------------------------------------------------------------------------------------------+
