.. _grandproject:

======================
グランドプロジェクト
======================

通常のプロジェクトでは1つの原子構造モデルだけを扱いますが、グランドプロジェクトを使うと多数の構造に対する計算結果をまとめて扱うことができます。

.. _grand_make:

グランドプロジェクトの作り方
==========================================

元となる構造のプロジェクトで、左下のメニュー |projectmenuicon| から :guilabel:`Grand-project` をクリックします。

ダイアログが表示されますので、 :guilabel:`Type of Grand-Project` で作成するグランドプロジェクトの種類を選択します。

- NeuralMD

   Advance/NeuralMDで使用する教師データを作成します。元となる構造から多数の構造を生成し、それぞれについて全エネルギーを計算して、1つの教師データファイルに出力する、という一連の手順をグランドプロジェクト内で実行することができます。

:guilabel:`Path of Grand-Project` のボタンをクリックし、名前を指定して保存すると、グランドプロジェクトの画面が開きます。

作成したグランドプロジェクトは、エクスプローラーで他のプロジェクトやモデルに並んでアイコン |grandicon| で表示されます。

.. |projectmenuicon| image:: /img/projectmenuicon.png
.. |grandicon| image:: /img/grandproject_icon.png

.. _grand_neumd:

NeuralMD用教師データ
==========================================

.. _grand_neumd_display:

画面構成
------------------------------------------

.. image:: /img/grandproject.svg

.. _grand_neumd_example:

簡単な使用例
------------------------------------------

#. カラム上部に元となる構造が表示されているのを確認します。
#. :guilabel:`Random Geometries #1` の :guilabel:`Use for Training NNP` にチェックを入れます。
#. :guilabel:`Generate Geometries` をクリックします。ランダム構造が生成されます。
#. :guilabel:`Run` をクリックして、SCF計算を実行します。
#. 計算が終わったらグランドプロジェクトの画面に戻り、画面右側の :guilabel:`Training Neural Network Potential` のボタンをクリックして、教師データを保存します。

.. _grand_neumd_addremove:

構造の追加・削除
------------------------------------------

グランドプロジェクトを作成した時には、元となる構造が1つだけ設定された状態です。画面右側の :guilabel:`Add Sample Geometry` をクリックして、プロジェクトまたは原子構造ファイルをダブルクリックすると、その構造を追加することができます。

- グランドプロジェクトの画面内に原子構造ファイルをドラッグ＆ドロップすることでも追加できます。

1つの元構造につき、1つのカラムが表示されます。

- カラムの右クリックメニューから、コピー・ペースト・削除ができます。
- カラム上部の |remove| でも削除ができます。
- :kbd:`Ctrl` + :kbd:`C` 、 :kbd:`Ctrl` + :kbd:`V` のショートカットキーが使用可能です。

.. hint:: 1つのグランドプロジェクト内にバルクモデルとスラブモデルなど異なる構造を設定し、まとめて教師データにする、という使い方ができます。

また、1つの元構造から、異なる複数の設定でランダム構造を生成することもできます。最初は構造生成の設定が1つだけ(Random Geometries #1)ある状態です。カラム内の :guilabel:`Add Random Geometries` で設定の追加、:guilabel:`Remove Random Geometries` で設定の削除ができます。

.. hint:: 元となる構造から2通りの設定でランダム構造を生成し、片方は教師データ、もう片方はテストデータにする、という使い方ができます。

.. |remove| image:: /img/remove.png

.. _grand_neumd_setting:

元構造・ランダム構造生成の設定項目
------------------------------------------

Edit Input File of Q.E.
 SCF計算の設定をします。この設定がカラム内のランダム構造の計算に適用されます。

Edit Geometry by Modeler
 元構造をモデラーを使って編集します。

Add Random Geometries / Remove Random Geometries
 元構造からランダム構造を生成するための設定を追加・削除します。

Use for Training NNP / Use for Testing NNP
 ランダム構造を教師データ・テストデータに使うかの設定です。最終的にデータを出力する時、ここでの設定に基づいて集計・出力の対象が決まります。

 チェック状況はタイトルの左に色で表示されます。設定画面を折り畳んでいても、一目で確認することができます。

 .. image:: /img/grand_control.svg

Generating Geometries
 - Randomly Atomic Shift: 元構造からランダムに原子を動かした構造を生成します。
 - Trajectory of MD (LAMMPS): 元構造からLAMMPSで分子動力学計算を実行し、そのトラジェクトリーから構造を抽出します。 :guilabel:`Calculate MD` のボタンをクリックするとLAMMPSの画面が開きますので、設定を行い、計算を実行してください。
 
 .. note:: 座標を固定した原子がある場合、ランダム構造生成時にもその座標は固定されたままになります。

 :guilabel:`Generate Geometries` をクリックすると、指定した設定でランダム構造を生成（抽出）します。

Calculation of Q.E.
 生成したランダム構造に対し、SCF計算を実行します。

 - 同一のグランドプロジェクト内であっても、設定ごとに別の計算サーバーで計算を実行することもできます。

 Result画面では、計算の状況を確認できます。 :guilabel:`Energy` 、 :guilabel:`Force` から終了した計算の結果をまとめて確認できます。

 .. image:: /img/grandresult.png

.. _grand_neumd_export:

結果の集計・出力
------------------------------------------

画面右側の :guilabel:`Training Neural Network Potential` 、 :guilabel:`Training Neural Network Potential` にある :guilabel:`Export Data` をクリックすると、グランドプロジェクト内で計算が終了しているものを集計し、教師データ・テストデータをファイル出力します。
 
- 計算サーバーで計算を実行している場合は、自動的に結果を取得し、集計します。
