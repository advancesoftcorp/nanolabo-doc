.. _inputeditorqe:

==========================================================
入力ファイルエディター（Quantum ESPRESSO固有の設定）
==========================================================

.. _kpointpath:

バンド計算の経路
=================================

画面右下のメニュー |editormenuicon| から :guilabel:`Band` または :guilabel:`Ph. Dispersion` を選ぶと、設定項目の中に :guilabel:`Path through B.Z.` （バンド計算の経路）があります。この設定方法を説明します。

.. |editormenuicon| image:: /img/editormenuicon.png

:guilabel:`Symbol` では、経由する点を指定します。リストボックス中に無い任意の点を指定したい場合は、 :guilabel:`Symbol` を空白にし、座標を :guilabel:`kx, ky, kz` （または :guilabel:`qx, qy, qz` ）に入力します。

点の追加、削除、入れ替えは行の右クリックメニューから行います。追加の際は、クリックした行の次に新しい行が挿入されます。

:guilabel:`nk` （または :guilabel:`nq` ）には、その行と次の行で指定した点の間で計算する点の数を指定します。例えば画像の1行目では :guilabel:`nk` に20と入力していますが、これはその行で指定している\ |gamma|\ 点と、次の行で指定しているY点の間の20点で計算することを表します。

また :guilabel:`nk` に0を入力すると、その行と次の行で指定した点の間では計算を行いません。バンド図上では、その行と次の行の点が重なって表示されます。

.. image:: /img/kpointpath.png

.. |gamma| raw:: html

   &Gamma;