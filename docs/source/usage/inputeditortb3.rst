.. _inputeditortb3:

==============================================
ThreeBodyTBの事前設定
==============================================

`ThreeBodyTB <https://pages.nist.gov/ThreeBodyTB.jl/>`_\ として公開されているパッケージを使い、三体間相互作用を考慮したタイトバインディング法に基づく計算を行います。

Juliaを呼び出して実行するため、事前にJulia環境の設定が必要です。また、MPI並列には非対応です（OpenMP並列は可能です）。

.. _tb3julia:

インストール
===================================

実際に計算を行うマシン（計算サーバーにジョブ投入する場合には、その計算サーバー上）でインストールを行ってください。

#. Juliaの\ `ダウンロードページ <https://julialang.org/downloads/>`_\ からインストーラーまたは実行ファイルをダウンロードし、インストールしてください。

#. インストールしたJuliaの対話型実行環境を起動し、ThreeBodyTBパッケージをインストールしてください。

     .. code-block:: console

         using Pkg
         Pkg.add("ThreeBodyTB")

   DOS・Bandを使用する場合はPlotsパッケージもインストールしてください。

     .. code-block:: console

         Pkg.add("Plots")

.. _tb3nanolabo:

NanoLaboへの設定
====================

- ローカル（NanoLaboを使っているマシン）で実行する場合

      画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Julia` でjulia実行ファイルのパスを設定します。

- リモート（計算サーバー等）で実行する場合

     juliaのインストール先が :file:`~/julia*` の場合は、デフォルトで追加される :envvar:`PATH` で動作しますので、設定は必要ありません。

     他の場所にインストールした場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Network --> SSH server` を開き、ジョブスクリプトに :envvar:`PATH` を追加してください。

     .. code-block:: console

         export PATH=(juliaのインストール先)/bin:$PATH

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. _tb3error:

実行時のエラー
====================

- ThreeBodyTB 1.0.0以降とXML2_jll 2.12.0以降の組み合わせで次のようなエラーが出る場合があります。

 .. code-block:: none

  Warning: XMLError: xmlSAX2Characters: huge text node from XML parser
  ERROR: LoadError: InexactError: trunc(Int64, NaN)

 この場合、Juliaの対話型実行環境を起動し、XML2_jll 2.11.5以前にバージョンを下げてください。

 .. code-block:: console

  using Pkg
  Pkg.add(PackageSpec(name="XML2_jll", version="2.11.5")) 
