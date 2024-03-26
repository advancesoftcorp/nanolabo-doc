.. _m3gnet:

===========================================================
M3GNet汎用力場を使うための設定
===========================================================

.. _m3gnetpython:

Pythonの設定
===============

LAMMPSからM3GNet汎用力場（\ `従来版 <https://github.com/materialsvirtuallab/m3gnet>`_\ 、\ `MatGL版 <https://github.com/materialsvirtuallab/matgl>`_\ ）＋\ `Simple DFT-D3 <https://dftd3.readthedocs.io/en/latest/>`_\ による補正を使うために必要な設定手順を説明します。

従来版のM3GNetは単独のパッケージとして公開されましたが、その後継となるバージョンがMaterials Graph Library(MatGL)に含まれる形で新たに公開されています。アドバンスソフト改修版LAMMPSでは、従来版に同梱されている学習済みモデル ``MP-2021.2.8-EFS`` を使う場合は従来版のM3GNetを、それ以外の場合はMatGL版のM3GNetを選んで実行するようになっています。

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

     MatGL版M3GNetはPyTorchを使って実装されており、GPU版PyTorchを使うことで計算を高速化することができます。

     NVIDIAドライバがインストールされていない場合は、あらかじめインストールしてください。

     まず、PyTorchのGPU版をインストールします。CUDAバージョンが最新の場合は `Get Started <https://pytorch.org/get-started>`__ 、そうでない場合は `Previous Versions <https://pytorch.org/get-started/previous-versions/>`_ を参照し、CUDAバージョンに合わせたpipのインストールコマンドを実行してください。

     次に、Deep Graph Library(DGL)のGPU版をインストールします。 `Get Started <https://www.dgl.ai/pages/start.html>`__ を参照し、CUDAバージョンに合わせたpipのインストールコマンドを実行してください。

     インストール後、GPUが利用可能になっているかどうかPythonの対話環境で確認できます。

     .. code-block:: python

      python

      >>> import torch
      >>> print(torch.cuda.is_available())   #GPU使用可否
      True
      >>> exit()                             #Python環境終了

#. インストール

     m3gnetと、DFT-D3補正に必要なパッケージをインストールします。

     .. code-block:: console

         pip install m3gnet matgl
         conda install simple-dftd3 dftd3-python -c conda-forge

.. _m3gnetnanolabo:

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

.. _m3gneterror:

実行時のエラー
====================

- 実行時に次のようなエラーが出る場合があります。

 .. code-block:: none
 
  ValueError: Model does not exists

 これは実行に必要な学習済みのモデルデータが存在しないというメッセージです。m3gnetパッケージにはモデルデータが含まれていないため、初回実行時にダウンロードを試みますが、インターネット接続に問題があると実行できません。

 代替として、モデルデータを手動でダウンロードすることもできます。\ `m3gnetのリポジトリのMP-2021.2.8-EFSフォルダ <https://github.com/materialsvirtuallab/m3gnet/tree/main/pretrained/MP-2021.2.8-EFS>`_\ 内のファイルをダウンロードし、 :file:`(condaのインストール先)/lib/site-packages/m3gnet/models/MP-2021.2.8-EFS` に保存してください。

 また、MatGL版M3GNetでも同じ理由で次のエラーが出る場合があります。

 .. code-block:: none

  ValueError: No valid model found in pre-trained_models at https://github.com/materialsvirtuallab/matgl/raw/main/pretrained_models/.

 MatGL版の場合は、\ `matglのリポジトリ <https://github.com/materialsvirtuallab/matgl/tree/main/pretrained_models>`_\ に各モデル名のフォルダがありますので、使用するモデルのファイルをダウンロードし、 :file:`(ホームディレクトリ)/.cache/matgl/(モデル名)` に保存してください。

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

- PyTorch1.13.1以前で次のようなエラーが出ることを確認しています。

 .. code-block:: none
 
  IndexError: tensors used as indices must be long, byte or bool tensors

 この場合、PyTorchのバージョンを確認し、PyTorch2以降をインストールしてください。

 .. code-block:: console

  # インストールされているバージョンを確認
  pip list
  # PyTorchをアンインストール
  pip uninstall torch torchvision torchaudio
  # インストール可能なPyTorchのバージョンを表示
  pip install torch==
  # PyTorch2以降を指定してインストール
  pip install 'torch>=2' torchvision torchaudio

.. _m3gnetlammps:

LAMMPSを直接実行する場合
===========================

NanoLaboを使わず、LAMMPS単体で実行する場合の説明です。

NanoLabo Tool同梱の実行ファイル :file:`lammps_m3gnet` を使用します。MPI並列計算には非対応です。

Linux・macOSでは、実行時にPythonの動的ライブラリを使用しますので、環境変数 :envvar:`LD_LIBRARY_PATH` を設定してください。

.. code-block:: console

 $ export LD_LIBRARY_PATH=(condaのインストール先)/lib:$LD_LIBRARY_PATH

また、Linuxでは環境変数 :envvar:`OPAL_PREFIX` を設定してください。

.. code-block:: console
 :caption: デフォルトの場所にインストールした場合の例

 $ export OPAL_PREFIX=/opt/AdvanceSoft/NanoLabo/exec.LINUX/mpi

LAMMPSから :file:`m3gnet_driver.py` または :file:`matgl_driver.py` を呼び出すことで動作しますので、NanoLabo Toolインストール先の :file:`m3gnet` フォルダをPythonのモジュール検索パスに追加してください。例えば、環境変数 :envvar:`PYTHONPATH` に追加します。

.. code-block:: console
 :caption: Linuxの例

 $ export PYTHONPATH=(NanoLabo Toolのインストール先)/m3gnet:$PYTHONPATH

LAMMPSの入力ファイル中で、以下のように\ ``pair_style``\ を設定します。

.. code-block:: none
 :caption: M3GNet

 pair_style m3gnet
 pair_coeff * * <model> <元素名1 元素名2 ...>

.. code-block:: none
 :caption: M3GNet + DFT-D3による補正

 pair_style m3gnet/d3
 pair_coeff * * <model> <元素名1 元素名2 ...>

パラメーター

 .. table::
  :widths: auto

  +--------------------+---------------------------------------------------------------------------------------------------------------------+
  | model              || 使用するグラフニューラルネットワークのモデル                                                                       |
  |                    || MP-2021.2.8-EFSを指定すると、従来版M3GNet＋同梱の学習済みモデルを使用                                              |
  |                    || M3GNet-MP-2021.2.8-PESまたはM3GNet-MP-2021.2.8-DIRECT-PESを指定すると、MatGL版M3GNet＋同梱の学習済みモデルを使用   |
  |                    || フォルダパスを指定すると、MatGL版M3GNet＋フォルダに保存されたモデルを使用                                          |
  +--------------------+---------------------------------------------------------------------------------------------------------------------+
  | 元素名             | LAMMPSのatom type毎に、対応する元素名を列挙                                                                         |
  +--------------------+---------------------------------------------------------------------------------------------------------------------+

.. hint::

 次のようなエラーで実行できない場合があります。

 .. code-block:: none

  Fatal Python error: init_fs_encoding: failed to get the Python codec of the filesystem encoding
  Python runtime state: core initialized
  ModuleNotFoundError: No module named 'encodings'

 この場合、環境変数 :envvar:`PYTHONHOME` が正しく設定されているかご確認ください。

 .. code-block:: console
  :caption: Windowsの例

  set PYTHONHOME=(condaのインストール先)
