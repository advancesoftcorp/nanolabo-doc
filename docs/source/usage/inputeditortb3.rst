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

#. Juliaの\ `ダウンロードページ <https://julialang.org/downloads/>`\ からインストーラーまたは実行ファイルをダウンロードし、インストールしてください。

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
