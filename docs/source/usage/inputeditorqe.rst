.. _inputeditorqe:

.. |editormenuicon| image:: /img/editormenuicon.png
    :align: bottom

.. |add| image:: /img/add.png
    :align: bottom 

.. |remove| image:: /img/remove.png
    :align: bottom 

.. |import| image:: /img/import.png
    :align: bottom 

.. |view| image:: /img/view.png
    :align: bottom 

.. |to_be_smooth| image:: /img/to_be_smooth.png
    :align: bottom 

==========================================================
入力ファイルエディター（Quantum ESPRESSO固有の設定）
==========================================================

.. _pseudopotential:

擬ポテンシャルの設定
================================

画面右下のメニュー |editormenuicon| から :guilabel:`Geometry` を選び、 :guilabel:`Elements` の :guilabel:`Element's Properties` で擬ポテンシャルの設定を行います。各元素の :guilabel:`Pseudopotential` 欄にあるボタンをクリックすると、擬ポテンシャルファイルを選択できます。また、設定に応じたカットオフエネルギーの推奨値が下部に表示されます。

擬ポテンシャル変更後、 :guilabel:`SCF` の設定で :guilabel:`Cutoff` 入力欄のデフォルト値設定ボタン |default| をクリックすると、更新されたカットオフエネルギーの推奨値が入力されます。

.. |default| image:: /img/default.png

.. _kpointpath:

バンド計算の経路
=================================

画面右下のメニュー |editormenuicon| から :guilabel:`Band` または :guilabel:`Ph. Dispersion` を選ぶと、設定項目の中に :guilabel:`Path through B.Z.` （バンド計算の経路）があります。この設定方法を説明します。

:guilabel:`Symbol` では、経由する点を指定します。リストボックス中に無い任意の点を指定したい場合は、 :guilabel:`Symbol` を空白にし、座標を :guilabel:`kx, ky, kz` （または :guilabel:`qx, qy, qz` ）に入力します。

点の追加、削除、入れ替えは行の右クリックメニューから行います。追加の際は、クリックした行の次に新しい行が挿入されます。

:guilabel:`nk` （または :guilabel:`nq` ）には、その行と次の行で指定した点の間で計算する点の数を指定します。例えば画像の1行目では :guilabel:`nk` に20と入力していますが、これはその行で指定している\ |gamma|\ 点と、次の行で指定しているY点の間の20点で計算することを表します。

また :guilabel:`nk` に0を入力すると、その行と次の行で指定した点の間では計算を行いません。バンド図上では、その行と次の行の点が重なって表示されます。

.. image:: /img/kpointpath.png

.. |gamma| raw:: html

   &Gamma;

.. _esm:

ESM法の設定
=================================

画面右下のメニュー |editormenuicon| から :guilabel:`SCF` を選ぶと、設定項目の中にIsolated Systemがあります。Isolated Systemの中にあるIsolation MethodからEffective Screening Method（ESM法）を選びます。

ESM法を有効にすると、計算の都合上、原子構造がスラブ面の法線方向にシフトすることがあります。

.. image:: /img/esm1.png

.. _neb:

NEB法の設定
=================================

画面右下のメニュー |editormenuicon| から :guilabel:`NEB` を選ぶと、設定項目の中にImagesがあります。ImagesではNEB法の計算に用いる初期イメージの編集を行います。この設定方法を説明します。

はじめは現在のプロジェクトの構造のみがイメージ（First）に追加されています。この状態で |add| をクリックするとプロジェクトの選択画面が出るので、他端のイメージ（Last）を指定します。このとき中間イメージ（Intermediate）が自動で生成されます。

.. image:: /img/neb1.png

個別のイメージに対する操作は各行のボタンから行います。

- イメージを追加するには |add| をクリックします。選択中のイメージの後に新規イメージが挿入されます。
- イメージを削除するには |remove| をクリックします。
- イメージを別の構造に置き換えるには、 |import| をクリックして、置き換えたい構造を含むプロジェクトを選びます。
- イメージの構造を確認するには、 |view| をクリックします。選択中のイメージ以外は残像で表示されます。

イメージ全体をスムーズ化するには、 |to_be_smooth| をクリックします。

.. image:: /img/neb2.png




