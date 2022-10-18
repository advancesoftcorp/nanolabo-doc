.. Advance/NanoLabo documentation master file, created by
   sphinx-quickstart on Tue May 29 15:03:58 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

============================================
ナノ材料解析統合GUI Advance/NanoLabo
============================================

`Advance/PHASE <https://www.advancesoft.jp/product/advance_phase/>`_\ （当社製品）および、\ `Quantum ESPRESSO <https://www.quantum-espresso.org/>`_\ や\ `LAMMPS <https://www.lammps.org/>`_\ などオープンソースのナノ材料解析ソフトウェアに対応した統合GUIです。\ `Materials Project <https://materialsproject.org/>`_\ などの材料データベースを検索し、モデリング・計算条件設定が極めて容易に行えます。計算実行後は、結果を瞬時にグラフィック表示できます。

本サイトはオンラインマニュアルです。製品ホームページは |nanolabologo|_ へどうぞ。

.. |nanolabologo| image:: /img/nanolabo.png
    :height: 2em
.. _nanolabologo: https://www.nanolabo.advancesoft.jp/

.. |nanolabologoen| image:: /img/nanolabo.png
    :height: 2em
.. _nanolabologoen: https://www.nanolabo.advancesoft.jp/en/

初めて使用される場合は、\ :doc:`インストール<install>`\ を行った後、\ :doc:`使用の流れ<flow>`\ をご確認ください。

.. important::

 [材料データベースURL変更]

  現在、材料データベース検索で結晶のデータが取得できなくなっています。

  材料データベース検索で使用しているMaterials Projectが更新され、データ取得用のURLが変更されたことによります。

  暫定的に、NanoLaboの設定ファイルを編集することで取得ができるようになりますので、お手数ですが対応をお願いいたします。次回(Ver.2.7)以降のリリースではデフォルトで変更後のURLに対応します。

  - 対応方法

   NanoLaboを終了した状態で、ホームフォルダの :file:`.nanolabo` フォルダにある :file:`.properties` ファイルをメモ帳等のテキストエディタで開き、以下の行を追記してください。

   .. code-block:: none
    :caption: .properties

    materials_api_url=https://legacy.materialsproject.org/rest/v1/materials/

   ホームフォルダは通常、Windows： :file:`C:\\Users\\（ユーザー名）` 、Linux・macOS： :file:`/home/（ユーザー名）` です。

.. toctree::
   :maxdepth: 2
   :caption: 目次:

   install
   flow
   usage
   python
   demo
   version
   link

.. Indices and tables
   ==================
   * :ref:`genindex`
   * :ref:`modindex`
   * :ref:`search`
