.. _modeler:

===========================
モデラ―
===========================

原子構造の高度な編集を行います。左下のメニュー |projectmenuicon| から :guilabel:`Modeler` をクリックして、モデラ―画面を開いてください。

モデラ―上で行った編集は、 :guilabel:`Reflect on Input-file` をクリックすることでプロジェクトに反映されます。 :guilabel:`Initialize Model` をクリックすると、編集を行う前（モデラ―画面を開いた時点）の状態に戻ります。

編集が終わりましたら、左下の戻るボタン |back| をクリックしてプロジェクト画面に戻ります。

.. |projectmenuicon| image:: /img/projectmenuicon.png

.. _translation:

並進移動
==========

:guilabel:`Translation of Cell` で、すべての原子を同じ方向・距離に移動させます。各単位格子ベクトルのスライダーを動かすと、リアルタイムでビューワーに反映されます。

.. _supercell:

超格子
================

:guilabel:`Super Cell` で、単位格子を繰り返した構造の超格子を作成します。 :guilabel:`Scaling` 欄の3つのテキストボックスに、a、b、c軸方向の繰り返し回数をそれぞれ入力し、 :guilabel:`Build` をクリックしてください。

.. image:: /img/supercell.png

.. _slab:

スラブモデル
================

表面などの非周期系を近似的に周期的境界条件で扱う、スラブ近似のためのモデルを作成します。

:guilabel:`Slab Model` で、表面となる結晶面をミラー指数で指定し、 :guilabel:`Build` をクリックすると、スラブモデルの詳細設定を行う画面が表示されます。

スラブの厚さを :guilabel:`Slab System` の :guilabel:`Width / Cell` スライダーで、真空層の厚さを :guilabel:`Vacuum of a Side` の :guilabel:`Width / Angs.` スライダーで変更します。 :guilabel:`Area Scaling` のテキストボックスに繰り返し回数をそれぞれ入力し、 :guilabel:`Build` をクリックすると、スラブの層内方向に繰り返した構造を生成します。 

複数の異なる表面原子構造が存在する場合、 :guilabel:`Kind of Surface` に複数の候補が表示されますので、クリックして選択してください。

変更はリアルタイムでビューワーに反映されます。

:guilabel:`Initialize Model` をクリックすると、詳細設定を行う前（スラブモデル画面を開いた時点）の状態に戻ります。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. |back| image:: /img/back.png

.. image:: /img/slab.png

.. _substitution:

元素置換
================

モデル中の原子の一部を異なる種類に変更します。

:guilabel:`Crystal` タブの :guilabel:`Element Substitution` にある :guilabel:`Start Modeling` をクリックすると、元素置換を行う画面が表示されます。

:guilabel:`Element to be Substituted` （置換元の元素）、 :guilabel:`For What Element ?` （置換先の元素）、 :guilabel:`Super Cell` （超格子を作成する場合その繰り返し回数）、 :guilabel:`Rate of Substitution` （置換する割合）を順に設定してください。 :guilabel:`Next` で次の項目、 :guilabel:`Previous` で前の項目の設定に移ります。設定が終わったら、 :guilabel:`Build` をクリックすると、置換後の構造がビューワーに表示されます。 そのまま再度 :guilabel:`Build` をクリックすると、同じ置換設定で異なる構造が表示されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. _defect:

点欠陥（空孔）
=================

モデル中の原子の一部を取り除き、点欠陥（空孔）を作成します。

:guilabel:`Crystal` タブの :guilabel:`Lattice Defect` にある :guilabel:`Start Modeling` をクリックすると、点欠陥を作成する画面が表示されます。

:guilabel:`Element to be Removed` （取り除く元素）、 :guilabel:`Super Cell` （超格子を作成する場合その繰り返し回数）、 :guilabel:`Rate of Lattice Defect` （取り除く割合）を順に設定してください。 :guilabel:`Next` で次の項目、 :guilabel:`Previous` で前の項目の設定に移ります。設定が終わったら、 :guilabel:`Build` をクリックすると、欠陥を入れた構造がビューワーに表示されます。 そのまま再度 :guilabel:`Build` をクリックすると、同じ設定で異なる構造が表示されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。