.. _atomsviewer:

=============================
原子構造ビューワー
=============================

プロジェクト画面内では、原子構造情報ファイルが3Dモデルとして表示されます。原子構造の簡単な編集もこの画面内で行うことができます。より高度な編集機能は\ :doc:`モデラ―<modeler>`\ 画面でご使用いただけます。

.. _viewpoint:

視点の操作
=============

.. table::
   :widths: auto

   +---------------------------------------+-----------------------------+------------------------------------------------------+
   | 操作                                  | マウス                      | キーボード                                           |
   +=======================================+=============================+======================================================+
   | 回転                                  | ドラッグ                    | 矢印キー                                             |
   |                                       |                             |                                                      |
   |                                       |                             | （:kbd:`Ctrl` + 矢印キーで微調整）                   |
   +---------------------------------------+-----------------------------+------------------------------------------------------+
   | ズーム                                | ホイールスクロール          | :kbd:`Alt` + 上下矢印キー                            |
   |                                       |                             |                                                      |
   |                                       | :kbd:`Alt` + 上下ドラッグ   | （:kbd:`Ctrl` + :kbd:`Alt` + 上下矢印キーで微調整）  |
   +---------------------------------------+-----------------------------+------------------------------------------------------+
   | 移動                                  | ホイールドラッグ            | :kbd:`Shift` + 矢印キー                              |
   |                                       |                             |                                                      |
   |                                       | :kbd:`Shift` + ドラッグ     | （:kbd:`Ctrl` + :kbd:`Shift` + 矢印キーで微調整）    |
   +---------------------------------------+-----------------------------+------------------------------------------------------+
   | リセット                              |                             | :kbd:`0`                                             |
   |                                       |                             |                                                      |
   |                                       |                             | :kbd:`1`                                             |
   |                                       |                             |                                                      |
   |                                       |                             | :kbd:`Backspace`                                     |
   +---------------------------------------+-----------------------------+------------------------------------------------------+

`*`:sup: macOSでは :kbd:`Ctrl` |rarr| :kbd:`command` 、 :kbd:`Alt` |rarr| :kbd:`option` と読み替えてください。

右クリックメニューの :guilabel:`Operations for Atoms` をクリックすると、視点を微調整するためのウィンドウが表示されます。

.. |rarr| raw:: html

   &rarr;

.. _design:

表示デザインの変更
=====================

画面左下のメニュー |projectmenuicon| から :guilabel:`Designer` をクリックして、デザイン変更画面を開いてください。画面右側のパネルで、3Dモデルの表示方法を詳細に設定できます。設定が終わりましたら、左下の戻るボタン |back| をクリックして元の画面に戻ります。

.. |projectmenuicon| image:: /img/projectmenuicon.png
.. |back| image:: /img/back.png

.. image:: /img/designer.png

.. _basic-mod:

原子構造の簡単な編集
========================

.. _basic-mod-change:

原子の変更
------------

1. 変更したい原子を右クリックし、メニューから :guilabel:`Rename selected atoms` をクリックします。
2. 周期律表が表示されますので、元素を選択してください。
3. 原子が選択した元素に変更されます。

.. _basic-mod-del:

原子の削除
-----------

1. 削除したい原子を右クリックし、メニューから :guilabel:`Delete selected atoms` をクリックします。
2. 確認が表示されますので、 :guilabel:`OK` をクリックすると、原子が削除されます。

.. _basic-mod-move:

原子の移動
------------

1. 移動したい原子を右クリックし、メニューから :guilabel:`Move selected atoms` をクリックします。
2. 緑色の平面と、黒色の法線が表示されます。まずはドラッグで平面を回転させます。キーボードによる操作もできます。

   .. table::
      :widths: auto

      +---------------------------------------+------------------------------------------------------------------------------------+
      | 操作                                  |                                                                                    |
      +=======================================+====================================================================================+
      | 回転                                  | 矢印キー                                                                           |
      |                                       |                                                                                    |
      |                                       | （:kbd:`Ctrl` + 矢印キーで微調整）                                                 |
      +---------------------------------------+------------------------------------------------------------------------------------+
      | リセット                              | :kbd:`0`                                                                           |
      |                                       |                                                                                    |
      |                                       | :kbd:`1`                                                                           |
      +---------------------------------------+------------------------------------------------------------------------------------+

   `*`:sup: macOSでは :kbd:`Ctrl` |rarr| :kbd:`command` と読み替えてください。

3. 続けて選択した原子をドラッグすると、平面に沿って移動させることができます。原子を複数選択している場合は、右クリックした原子（平面の中央）をドラッグしてください。
4. ドロップ（マウスのボタンを離す）すると、位置が確定します。

.. _basic-mod-add:

原子の追加
------------

1. 原子を追加したい位置を右クリックし、メニューから :guilabel:`Put an atom` をクリックします。
2. 周期律表が表示されますので、元素を選択すると、原子が追加されます。

.. _basic-mod-paste:

原子の切り取り・コピー・貼り付け
----------------------------------

1. 切り取りまたはコピーしたい原子を右クリックし、メニューから :guilabel:`Cut selected atoms` または :guilabel:`Copy selected atoms` をクリックします。
2. 貼り付けたい位置を右クリックし、 :guilabel:`Paste copied atoms` をクリックします。元とは別のプロジェクトに貼り付けることもできます。

.. _basic-mod-select:

複数原子の選択・選択解除
------------------------------

複数の原子を選択して、変更・削除・移動操作を行えます。選択中の原子はワイヤーフレーム表示になります。

.. table::
   :widths: auto

   +---------------------------------------+------------------------------------------------------------------------------------------------+
   | 操作                                  |                                                                                                |
   +=======================================+================================================================================================+
   | 矩形選択                              | :kbd:`Ctrl` + ドラッグ                                                                         |
   +---------------------------------------+------------------------------------------------------------------------------------------------+
   | 個々の原子を選択・選択解除            | ダブルクリック                                                                                 |
   +---------------------------------------+------------------------------------------------------------------------------------------------+
   | 全選択                                | :menuselection:`右クリックメニュー --> Select all atoms`                                       |
   +---------------------------------------+------------------------------------------------------------------------------------------------+
   | 全選択解除                            | :menuselection:`右クリックメニュー --> Not select any atoms`                                   |
   +---------------------------------------+------------------------------------------------------------------------------------------------+

`*`:sup: macOSでは :kbd:`Ctrl` |rarr| :kbd:`command` と読み替えてください。

.. _basic-mod-rotate:

原子の回転移動
------------------

1. 回転移動したい原子を選択します。
2. 回転の中心となる原子を右クリックし、メニューから :guilabel:`Rotate selected atoms` をクリックします。回転の中心は1.で選択した中の原子でも、他の原子でも構いません。
3. 球が表示されますので、ドラッグして回転移動を行います。キーボードによる操作もできます。

   .. table::
      :widths: auto

      +---------------------------------------+------------------------------------------------------------------------------------+
      | 操作                                  |                                                                                    |
      +=======================================+====================================================================================+
      | 回転                                  | 矢印キー                                                                           |
      |                                       |                                                                                    |
      |                                       | （:kbd:`Ctrl` + 矢印キーで微調整）                                                 |
      +---------------------------------------+------------------------------------------------------------------------------------+
      | リセット                              | :kbd:`0`                                                                           |
      |                                       |                                                                                    |
      |                                       | :kbd:`1`                                                                           |
      +---------------------------------------+------------------------------------------------------------------------------------+

   `*`:sup: macOSでは :kbd:`Ctrl` |rarr| :kbd:`command` と読み替えてください。

4. :kbd:`Esc` キーを押すと、位置が確定します。

.. _basic-mod-shortcut:

ショートカットキー一覧
-------------------------

.. table::
   :widths: auto

   +---------------------------------------+------------------------------------------------------------------------------------+
   | 操作                                  |                                                                                    |
   +=======================================+====================================================================================+
   | 全選択                                |  :kbd:`Ctrl` + :kbd:`A`                                                            |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | 全選択解除                            | :kbd:`Esc`                                                                         |
   |                                       |                                                                                    |
   |                                       | :kbd:`Backspace`                                                                   |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | 削除                                  | :kbd:`Ctrl` + :kbd:`D`                                                             |
   |                                       |                                                                                    |
   |                                       | :kbd:`Delete`                                                                      |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | 変更                                  | :kbd:`Ctrl` + :kbd:`R`                                                             |
   |                                       |                                                                                    |
   |                                       | :kbd:`F2`                                                                          |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | 切り取り                              | :kbd:`Ctrl` + :kbd:`X`                                                             |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | コピー                                | :kbd:`Ctrl` + :kbd:`C`                                                             |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | 貼り付け\ `*`:sup:                    | :kbd:`Ctrl` + :kbd:`V`                                                             |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | アンドゥ（直前の操作の取り消し）      | :kbd:`Ctrl` + :kbd:`Z`                                                             |
   +---------------------------------------+------------------------------------------------------------------------------------+
   | リドゥ（取り消した操作のやり直し）    | :kbd:`Ctrl` + :kbd:`Shift` + :kbd:`Z`                                              |
   +---------------------------------------+------------------------------------------------------------------------------------+

`*`:sup: マウスカーソルのある位置に貼り付けられます。

`**`:sup: macOSでは :kbd:`Ctrl` |rarr| :kbd:`command` と読み替えてください。

.. _spacegroup:

空間群の判定
================

右クリックメニューの :guilabel:`Detect space group` をクリックすると、モデルの原子構造の属する空間群を表示します。

.. _geoinfo:

幾何学的情報の表示
=====================

選択した原子の結合長・結合角・二面角を測定する機能です。右クリックメニューの :guilabel:`Geometric Information` をクリックすると、小さいウィンドウが表示されます。

原子をダブルクリックで選択していくと、 :guilabel:`Selected Atoms` のa、b、c、dに順に設定されます。同時に、対応する結合長（a-b間、b-c間、c-d間）、結合角（∠abc、∠bcd）、二面角（a・b・cを含む平面とb・c・dを含む平面がなす角）が下に表示されます。

.. image:: /img/geoinfo.png

.. _exportatomconfig:

原子構造のエクスポート
==============================

右クリックメニューの :guilabel:`Export atomic configuration` をクリックすると、モデルの原子構造をCIFファイル・XYZファイル・POSCARファイル（VASP形式）としてエクスポートできます。
