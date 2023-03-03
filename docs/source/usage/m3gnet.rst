.. _m3gnet:

===========================================================
M3GNet汎用力場を使うための設定
===========================================================

.. _m3gnetpython:

Pythonの設定
===============

LAMMPSから\ `M3GNet <https://github.com/materialsvirtuallab/m3gnet>`__\ 汎用力場＋\ `Simple DFT-D3 <https://dftd3.readthedocs.io/en/latest/>`_\ による補正を使うために必要な設定手順を説明します。

実際に計算を行うマシン（計算サーバーにジョブ投入する場合には、その計算サーバー上）でインストールを行ってください。

#. conda環境の用意

     Python環境としてcondaを使用します。現在condaをお使いでない場合は、必要最小限の構成であるMinicondaを推奨します。

     `Minicondaのページ <https://docs.conda.io/en/latest/miniconda.html>`_\ からPython 3.9のインストーラーをダウンロードし、インストールしてください。

     Windowsで環境変数 :envvar:`PATH` を変更しない設定でインストールした場合、以降の作業はスタートメニューからAnaconda Promptを起動して行ってください。

#. インストール

     m3gnetと、DFT-D3補正に必要なパッケージをインストールします。

     .. code-block:: console

         pip install m3gnet
         conda install simple-dftd3 dftd3-python -c conda-forge

.. _m3gnetnanolabo:

NanoLaboへの設定
====================

- ローカル（NanoLaboを使っているマシン）で実行する場合

      画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Python` （またはForce Field設定画面の :guilabel:`Setting Python` ボタン）でpython実行ファイルのパスを設定します。

      Windowsでは :file:`condaのインストール先\\python.exe` 、Linux・macOSでは :file:`condaのインストール先/bin/python` にあります。

- リモート（計算サーバー等）で実行する場合

     condaのインストール先が :file:`~/anaconda3` または :file:`~/miniconda3` であれば、デフォルトで追加される :envvar:`LD_LIBRARY_PATH` で動作しますので、設定は必要ありません。

     他の場所にインストールした場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server` を開き、ジョブスクリプトに :envvar:`LD_LIBRARY_PATH` を追加してください。

     .. code-block:: console

         export LD_LIBRARY_PATH=(condaのインストール先)/lib:$LD_LIBRARY_PATH

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. _m3gnetlammps:

LAMMPSを直接実行する場合
===========================

NanoLabo Tool同梱の実行ファイル :file:`lammps_m3gnet` を使用します。MPI並列計算には非対応です。

Linux・macOSでは、実行時にPythonの動的ライブラリを使用しますので、環境変数 :envvar:`LD_LIBRARY_PATH` を設定してください。

.. code-block:: console

 $ export LD_LIBRARY_PATH=(condaのインストール先)/lib:$LD_LIBRARY_PATH

また、Linuxでは環境変数 :envvar:`OPAL_PREFIX` を設定してください。

.. code-block:: console
 :caption: デフォルトの場所にインストールした場合の例

 $ export OPAL_PREFIX=/opt/AdvanceSoft/NanoLabo/exec.LINUX/mpi

LAMMPSから :file:`m3gnet_driver.py` を呼び出すことで動作しますので、NanoLabo Toolインストール先の :file:`m3gnet` フォルダをPythonのモジュール検索パスに追加してください。例えば、環境変数 :envvar:`PYTHONPATH` に追加します。

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

  +--------------------+-------------------------------------------------------------------------------------------------+
  | model              || 使用するグラフニューラルネットワークのモデル                                                   |
  |                    || MP-2021.2.8-EFSを指定（配布されている学習済みモデル）                                          |
  +--------------------+-------------------------------------------------------------------------------------------------+
  | 元素名             | LAMMPSのatom type毎に、対応する元素名を列挙                                                     |
  +--------------------+-------------------------------------------------------------------------------------------------+
