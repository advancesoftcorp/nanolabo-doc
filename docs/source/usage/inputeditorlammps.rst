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

:guilabel:`Non-Bonded Interactions` 欄の各行を右クリックすると、割り当ての詳細を確認できます。

.. image:: /img/opls.png

NeuralMD
-----------

:guilabel:`Atomic Energy` を :guilabel:`without bias` に設定することで、LAMMPS実行時に最終層のバイアス項を0にし、原子エネルギーの平準化を図る機能が有効になります。

Open Catalyst 2020
---------------------

`Open Catalyst Project <https://opencatalystproject.org>`_ で公開されている、グラフニューラルネットワークに基づく学習済みの汎用力場を使います。

LAMMPSからPythonを呼び出して実行するため、事前にPython環境の設定が必要です。また、MPI並列には非対応です。

.. toctree::
   :maxdepth: 1

   Python環境の設定方法<ocp>

.. _scheme:

Scheme（計算過程）
==============================

入力ファイルエディターの :guilabel:`Scheme` で計算過程の設定を行います。画面右下のメニュー |editormenuicon| から :guilabel:`Scheme` をクリックしてください。

.. |editormenuicon| image:: /img/editormenuicon.png

画面右側の :guilabel:`Set Scheme` で計算の設定を行い、 :guilabel:`Add Scheme` の :guilabel:`Apply` をクリックすると、画面左側に設定内容がタイル状に表示されます。必要に応じ、設定 |rarr| :guilabel:`Apply` を繰り返して過程を追加していきます。

.. |rarr| raw:: html

   &rarr;

タイルの左上の数字が過程の実行される順番です。前へボタン |lpback| 、後へボタン |lpfwd| で順番を入れ替えます。削除ボタン |lpdel| で削除します。

.. |lpback| image:: /img/lpback.png
.. |lpfwd| image:: /img/lpfwd.png
.. |lpdel| image:: /img/lpdel.png

追加済みのタイルの設定を後から編集するには、タイルをダブルクリックしてください。 :guilabel:`Set the scheme` ウィンドウが表示され、設定を編集できます。

また、 :guilabel:`Statistical Properties` の各項目を :guilabel:`yes` に設定することで、統計量（熱伝導率、粘性係数、拡散係数、動径分布関数(RDF)）が計算され、結果画面に表示されます。

各熱力学量や原子構造は毎ステップではなく、間を空けて出力されます。 :guilabel:`Interval to Print Logs` で出力の間隔をステップ数で設定できます。

.. image:: /img/scheme.png