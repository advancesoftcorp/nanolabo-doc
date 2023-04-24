.. _jupyter:

================================
Jupyter Interface for NanoLabo
================================

JupyterLabは、ブラウザベースのPython実行環境です。Jupyter Interface for NanoLaboを使うことで、Atomic Simulation Environment(ASE)とNanoLaboの間で原子構造を相互にやり取りし、JupyterLab上で原子構造を扱うことができます。

.. _jupyter_setting:

設定
================

画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Jupyter Lab` を開き、設定を行います。

- URL
- Token
   JupyterLabに接続するためのURL（例： ``http://localhost:8888/lab`` ）とtokenを設定します。

   .. note::

      パスワードによる認証には現在対応しておりません。パスワード認証の場合、JupyterLabの画面は表示できますが、原子構造のアップロード・ダウンロードができません。

- Uploading Path

      NanoLaboからJupyterLabに原子構造をアップロードする際の設定です。JupyterLabのルートディレクトリに対する相対パスを指定してください。

- Uploading File Type

      原子座標の固定／可動の情報を含めてアップロードしたい場合は :file:`.POSCAR` 形式を指定してください。

- Using NGLView

       ファイルをインポートする際のコードに、NGLViewを使って原子構造を可視化するコードを追加します。

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
