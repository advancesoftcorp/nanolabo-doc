.. _resultpdos:

=================
PDOS電卓
=================

結果表示の状態密度(DOS)プロットには、デフォルトでは全状態密度と各元素ごとに集計された部分状態密度が表示されます。PDOS電卓を使うことで、系の中の任意の原子の組み合わせについて部分状態密度を描画することができます。軌道・スピンの指定も可能です。

結果表示画面で :guilabel:`DOS` をクリックし、右側パネルの :guilabel:`Edit Definition of DOS's` をクリックすると、PDOS電卓が表示されます。

右側の :guilabel:`Formulas of DOS's` が現在描画されているDOSのリストです。既にあるDOSの編集ボタン |edit| をクリックするか、新しいDOSの追加 |add| ボタンをクリックすると、PDOS電卓での入力が可能になります。

.. image:: /img/pdoscalc.png

まず、左上の :guilabel:`All Atoms` 、 :guilabel:`Some Atoms` 、 :guilabel:`An Element` のいずれかをクリックし、対象の原子を選択します。 :guilabel:`Some Atoms` ではモデルが表示されますので、個々の原子をダブルクリックして選択するか、 :kbd:`Ctrl` + ドラッグで範囲選択します。選択後、 :guilabel:`End Selecting Atoms` をクリックします。

.. image:: /img/pdosselect.png

次に、軌道・スピンを指定する場合は、左下の各ボタンをクリックします。同じボタンをもう一度クリックすると指定が解除されます。

さらに、指定したDOSに対して、右側の各ボタンを使って四則演算を加えることができます。例えば複数の原子を選択した状態で1原子当たりの値に直したいときは、 |divine| をクリックした後、原子数を入力します。

:guilabel:`#` ボタンを使うと、モデル中の全原子数・各元素の原子数を入力できます。

指定が終わったら、 :guilabel:`OK` をクリックするとリストに反映されます。

全てのDOSの設定が終わったら、画面左下の戻るボタン |back| をクリックして、元のDOSプロット画面に戻ります。

.. |divine| raw:: html

 &divide;

.. |add| image:: /img/add.png
.. |edit| image:: /img/edit.png
.. |back| image:: /img/back.png