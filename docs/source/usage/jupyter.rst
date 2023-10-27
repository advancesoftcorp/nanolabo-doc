.. _jupyter:

====================================================
Jupyter Interface for NanoLabo / Matlantis連携
====================================================

JupyterLab / Jupyter Notebookは、ブラウザベースのPython実行環境です。Jupyter Interface for NanoLaboを使うことで、Atomic Simulation Environment(ASE)とNanoLaboの間で原子構造を相互にやり取りし、JupyterLab上で原子構造を扱うことができます。

また、Preferred Computational Chemistry社（Preferred NetworksとENEOSの合弁会社）の汎用ニューラルネットワーク力場\ `Matlantis <https://matlantis.com/ja/>`_\ |tm|\ は、Jupyter Notebookを使ったクラウドサービスとして提供されています。Jupyter Interface for NanoLaboを使うことで、NanoLabo上で原子構造をモデリングしてMatlantis\ |tm|\ でシミュレーションを行う、あるいはMatlantis\ |tm|\ のシミュレーション結果をNanoLaboで可視化する、といった連携が行えます。

.. note:: 本機能を利用するには、NanoLabo本体とは別にオプションのライセンスが必要です。

.. _jupyter_setting:

設定
================

画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Jupyter Lab` を開き、設定を行います。

- Type of Jupyter Lab
   Jupyter Interfaceのデフォルトの環境を設定します。Matlantis\ |tm|\ を使用する場合は\ :guilabel:`Matlantis`\ を、それ以外のオンプレミス等のJupyterLab環境を使用する場合は\ :guilabel:`On Premise`\ に設定してください。

- Launching Behavior
   Jupyter Interface起動時に環境を選択するダイアログを表示します。Matlantis\ |tm|\ とオンプレミス環境を切り替えてどちらも使用するという場合は\ :guilabel:`Ask Type of Jupyter Lab`\ に設定してください。

Matlantis\ |tm|\ を使用するには、最初にログインが必要です。\ :guilabel:`Matlantis`\ タブの\ :guilabel:`Log-in`\ のボタンからログインを行ってください。ログイン後、Jupyter NotebookのURLが\ :guilabel:`URL`\ 欄に設定されます。

オンプレミス環境の場合は、\ :guilabel:`On Premise`\ タブでJupyterLabに接続するための\ :guilabel:`URL`\ （例： ``http://localhost:8888/lab`` ）と\ :guilabel:`Token`\ を設定してください。

以下は各タブ共通の設定です。

- Uploading Path
   NanoLaboからJupyterLabに原子構造をアップロードする際の設定です。JupyterLabのルートディレクトリに対する相対パスを指定してください。

- Uploading File Type
   原子座標の固定／可動の情報を含めてアップロードしたい場合は :file:`.POSCAR` 形式を指定してください。

- Using NGLView
   ファイルをインポートする際のコードに、NGLViewを使って原子構造を可視化するコードを追加します。

- Drag & Drop
   画面にドロップしたファイルを直接JupyterLabに渡すか、NanoLaboで処理するかの設定です。

設定が終わったら、画面右上のPythonアイコン |pythonicon| をクリックして、JupyterLabの画面が表示されることを確認してください。

.. |mainmenuicon| image:: /img/mainmenuicon.png
.. |pythonicon| image:: /img/pythonicon.png

.. _jupyter_upload:

NanoLabo |rarr| JupyterLab
==============================

プロジェクトの原子構造をJupyterLabにインポートするには、左下のメニュー |projectmenuicon| から :guilabel:`Jupyter Lab` をクリックします。

原子構造ファイルがJupyterLabにアップロードされるとともに、JupyterLabのタブが開いて、原子構造をインポートするためのPythonコードが表示されます。表示されたコードをコピーし、JupyterLab上で実行することで、ASEのAtomsオブジェクトが作成されます。

.. image:: /img/jupyter_import.svg

.. hint::

 NGLViewは ``pip`` コマンドでインストールできます。

 .. code-block:: console

  $ pip install nglview

 NGLViewによる可視化を実行しようとした時に

 .. code-block:: console

  AttributeError: 'super' object has no attribute '_ipython_display_'

 というエラーが表示される場合、 ``ipywidgets`` のバージョンを指定することで改善する場合があります。

 .. code-block:: console

  $ pip install 'ipywidgets>=7.6.0,<8'

プロジェクトメニューから以外にも、原子構造ビューワーやプロジェクトアイコンの右クリックメニューからJupyterLabにインポートすることができます。

.. image:: /img/jupyter_context.svg
   :width: 500 px
   :align: center

.. hint:: 例えば、分子描画機能を使って分子を作成した後、原子構造ビューワーの右クリックメニューからすぐにJupyterLabにアップロードすることができます。

.. |projectmenuicon| image:: /img/projectmenuicon.png

.. _jupyter_download:

JupyterLab |rarr| NanoLabo
==============================

JupyterLab上で原子構造をファイルに出力します。ファイル形式はNanoLaboが対応しているものにしてください。 :file:`.POSCAR` 形式で保存する例を示します。

.. code-block:: python

 from ase.io import write
 write('export.POSCAR', myAtoms)

ファイルブラウザ上でファイルの右クリックメニューから :guilabel:`Download` をクリックすると、ファイルがNanoLaboにダウンロードされ、プレビューのダイアログが表示されます。 :guilabel:`Open` をクリックするとプロジェクトとして開きます。

.. image:: /img/jupyter_export.svg

.. |rarr| raw:: html

   &rarr;

.. |tm| raw:: html

   &trade;
