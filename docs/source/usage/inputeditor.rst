.. _inputeditor:

==============================
入力ファイルエディター
==============================

プロジェクト画面右側のパネルで、計算エンジンの入力ファイルを編集します。実行したい計算に応じて右下のメニュー |editormenuicon| からエディターのモードを選び、各計算エンジンのマニュアルを参照して適切な値を設定してください。

デフォルト値設定ボタン |default| がある設定項目は、ボタンをクリックするとデフォルト値が入力されます。

ファイルを設定する項目で、テキストファイルアイコン |textviewer| があるものは、アイコンをクリックするとファイルの内容が表示されます。

折り畳まれて表示されていない項目（右三角アイコン |collapse| ）は、クリックして展開することで表示できます。

.. |editormenuicon| image:: /img/editormenuicon.png
.. |default| image:: /img/default.png
.. |textviewer| image:: /img/textviewer.png
.. |collapse| image:: /img/collapse.png

入力欄が黄色くなった場合は、その値が適切でないことを示します。また、入力欄が赤くなった場合は、その値では計算ができない（実行してもエラーになる）ことを示します。入力欄をポイントすると入力可能な値の範囲が表示されます。入力欄を右クリックするとアンドゥ等の操作ができます。

.. image:: /img/textfield.png

スライダーは、マウス操作で値を設定するほか、右クリックメニューの :guilabel:`Input directly` で値を直接入力できます。また、一部のスライダーは右クリックメニューの :guilabel:`Extend the domain` で値の範囲を増やすことができます。

.. image:: /img/slider.png

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

.. _mobile:

原子の固定・可動設定
==============================

構造最適化や分子動力学計算を行う際に、指定した原子の座標を固定して計算を行うための設定を行います。

画面左側のビューワーで、固定したい原子を右クリックします。複数の原子を変更したい場合は :kbd:`Ctrl` + ドラッグで選択（ :kbd:`Ctrl` + 右ドラッグで選択解除）します。対象の原子がワイヤーフレーム表示に変わりますので、メニューから :guilabel:`Let selected atoms be FIXED` をクリックします。固定された原子を可動に戻したい場合は、同様にメニューから :guilabel:`Let selected atoms be MOBILE` をクリックします。

固定・可動の設定を確認するには、右下のメニュー |editormenuicon| から :guilabel:`Geometry` を開き、 :guilabel:`Atoms` 内の :guilabel:`Atomic Configuration` を見てください。固定された原子の座標は青文字で表示されます。また、原子の行の右クリックメニューから、XYZの各方向ごとに固定・可動を設定できます。

.. image:: /img/mobile.png