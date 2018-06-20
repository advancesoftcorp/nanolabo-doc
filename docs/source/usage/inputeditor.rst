.. _inputeditor:

==============================
入力ファイルエディター
==============================

プロジェクト画面右側のパネルで、計算エンジンの入力ファイルを編集します。実行したい計算に応じて右下のメニュー |editormenuicon| からエディターのモードを選び、各計算エンジンのマニュアルを参照して適切な値を設定してください。

.. |editormenuicon| image:: /img/editormenuicon.png

デフォルト値設定ボタン |default| がある設定項目は、ボタンをクリックするとデフォルト値が入力されます。

折り畳まれて表示されていない項目（右三角アイコン |collapse| ）は、クリックして展開することで表示できます。

.. |default| image:: /img/default.png
.. |collapse| image:: /img/collapse.png

いくつかの設定画面については補足説明がありますので、以下のリンクよりご覧ください。

.. toctree::
   :maxdepth: 2

   Quantum ESPRESSO<inputeditorqe>
   LAMMPS<inputeditorlammps>

.. _texteditor:

内蔵テキストエディタ―
===================================

左下のメニュー |projectmenuicon| から :guilabel:`Input-file` を開くと、作成される入力ファイルの内容を内蔵テキストエディタ―で確認することができます。

画面右側のパネルで変更した設定項目は、再読み込みボタン |reloadac| をクリックすることでテキストエディタ―側に反映されます。

また、テキストエディタ―で入力ファイルの内容を直接変更することもできます。変更した内容は、アップロードボタン |up| をクリックすることで画面右側のパネルに反映されます。

.. |projectmenuicon| image:: /img/projectmenuicon.png
.. |reloadac| image:: /img/reloadac.png
.. |up| image:: /img/up.png

.. note::
   テキストエディターの内容は、実際の入力ファイルを開いているわけではなく、設定項目から生成された一時的なものです。
   アップロードボタンをクリックしてから保存をすることで、実際の入力ファイルに反映されます。
   アップロードボタンをクリックしなかった場合、保存をしても実際の入力ファイルには反映されません。