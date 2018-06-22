.. _inputeditorlammps:

==============================================
入力ファイルエディター（LAMMPS固有の設定）
==============================================

.. _forcefield:

Force-Field（力場）
================================

入力ファイルエディターの :guilabel:`Force-Field` で力場の設定を行います。画面右下のメニュー |editormenuicon| から :guilabel:`Force-Field` をクリックしてください。

:guilabel:`Type of Force Field` で使用したい力場の種類を選ぶと、それに対応した設定項目が有効になりますので、設定を行ってください。

力場の設定後、設定内容に応じて各原子のパラメーターを調整する必要がある場合には、 :guilabel:`Resolve Force Field` の :guilabel:`Apply` ボタンが赤色になりますので、クリックして設定を反映させてください。

Lennard-Jones
----------------------

:guilabel:`Non-Bonded Interactions` 欄でLennard-Jonesポテンシャル :math:`E=4\epsilon [(\sigma /r)^{12} -(\sigma /r)^6]` のパラメーター\ :math:`\epsilon`\ 、\ :math:`\sigma`\ を設定してください。

Charge & Lennard-Jones
------------------------

Lennard-Jonesポテンシャルのパラメーターに加え、電荷を設定して下さい。全電荷が0でない場合、 :guilabel:`Resolve Force Field` の :guilabel:`Apply` ボタンをクリックすると、全電荷が0になるように一定の値を差し引きます。

OPLS-AA
---------------------

:guilabel:`Resolve Force Field` の :guilabel:`Apply` ボタンをクリックすると、OPLS-AAパラメーターセットに基づき、電荷およびLennard-Jonesポテンシャルのパラメーターを設定します。その後、全電荷が0になるように一定の値を差し引きます。

.. _scheme:

Scheme（計算過程）
==============================

入力ファイルエディターの :guilabel:`Scheme` で計算過程の設定を行います。画面右下のメニュー |editormenuicon| から :guilabel:`Scheme` をクリックしてください。

.. |editormenuicon| image:: /img/editormenuicon.png

画面右側のパネルで計算の設定を行い、 :guilabel:`Add Scheme` の :guilabel:`Apply` をクリックすると、画面左側に設定内容がタイル状に表示されます。必要に応じ、設定 |rarr| :guilabel:`Apply` を繰り返して過程を追加していきます。

.. |rarr| raw:: html

   &rarr;

タイルの左上の数字が過程の実行される順番です。前へボタン |lpback| 、後へボタン |lpfwd| で順番を入れ替えます。削除ボタン |lpdel| で削除します。

.. |lpback| image:: /img/lpback.png
.. |lpfwd| image:: /img/lpfwd.png
.. |lpdel| image:: /img/lpdel.png

追加済みのタイルの設定を後から編集するには、タイルをダブルクリックしてください。 :guilabel:`Set the scheme` ウィンドウが表示され、設定を編集できます。

.. image:: /img/scheme.png