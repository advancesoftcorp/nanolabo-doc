.. _grandproject:

====================================
グランドプロジェクト（NeuralMD連携）
====================================

通常のプロジェクトでは1つの原子構造モデルだけを扱いますが、グランドプロジェクトを使うと多数の構造に対する計算結果をまとめて扱うことができます。

.. _grand_make:

グランドプロジェクトの作り方
==========================================

元となる構造のプロジェクトで、左下のメニュー |projectmenuicon| から :guilabel:`Grand-project` をクリックします。

ダイアログが表示されますので、 :guilabel:`Type of Grand-Project` で作成するグランドプロジェクトの種類を選択します。

- NeuralMD
   Advance/NeuralMDで使用する教師データの作成と、ニューラルネットワークの学習ができます。
   
   元となる構造から多数の構造を生成し、それぞれについて全エネルギーを計算して、1つの教師データファイルに出力するという手順、およびNeuralMDを実行してニューラルネットワークの学習を行うという手順を、グランドプロジェクト内で実行することができます。

:guilabel:`Path of Grand-Project` のボタンをクリックし、名前を指定して保存すると、グランドプロジェクトの画面が開きます。

作成したグランドプロジェクトは、エクスプローラーで他のプロジェクトやモデルに並んでアイコン |grandicon| で表示されます。

.. |projectmenuicon| image:: /img/projectmenuicon.png
.. |grandicon| image:: /img/grandproject_icon.png

.. _grand_neumd:

NeuralMD
==========================================

.. note::

 NeuralMD連携機能（ニューラルネットワークの学習・メトロポリス法による構造生成）を使う場合は、別途NeuralMDのインストールが必要です。
 
 - ローカル（NanoLaboを使っているマシン）にインストールした場合は、 :menuselection:`左上メニュー --> Properties --> Advance/NeuralMD` でインストールした場所を設定してください。

 - リモート（計算サーバー等）にインストールした場合は、 :guilabel:`Job Script` の設定画面で必要な環境変数等を追加してください。

 - macOSでNanoLaboをご使用の場合、リモート実行でNeuralMD連携機能をお使いいただけます（現在NeuralMD macOS版がリリースされていないため、ローカル実行はできません）。

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
#. 計算が終わったらグランドプロジェクトの画面に戻り、画面右側の :guilabel:`Training Neural Network Potential` の :guilabel:`Start Training NNP` ボタンをクリックします。
#. NNP設定画面が開きます。 :menuselection:`左下メニュー --> Run` でニューラルネットワークの学習を実行します。
#. 計算が終わったらNNPのタブに戻り、結果画面の :guilabel:`force-field` をクリックして力場ファイルを保存します。
#. 作成した力場ファイルを使って分子動力学計算を行うには、新たにLAMMPSのプロジェクトを作成し、 :guilabel:`Force-Field` の設定画面で :guilabel:`Type of Force Field` をNeuralMDに設定して、 :guilabel:`Potential File` で作成した力場ファイルを選択します。

.. _grand_neumd_addremove:

構造の追加・削除
------------------------------------------

グランドプロジェクトを作成した時には、元となる構造が1つだけ設定された状態です。画面右側の :guilabel:`Add Sample Geometry` をクリックして、プロジェクトまたは原子構造ファイルをダブルクリックすると、その構造を追加することができます。

- グランドプロジェクトの画面内に原子構造ファイルをドラッグ＆ドロップすることでも追加できます。

1つの元構造につき、1つのカラムが表示されます。

- カラムの右クリックメニューから、コピー・ペースト・削除ができます。
- カラム上部の |remove| でも削除ができます。
- ショートカットキーによるカラム操作が可能です。

   .. table::
      :widths: auto

      +---------------------------------------+------------------------------------------------------------------------------------+
      | 操作                                  |                                                                                    |
      +=======================================+====================================================================================+
      | コピー                                | :kbd:`Ctrl` + :kbd:`C`                                                             |
      +---------------------------------------+------------------------------------------------------------------------------------+
      | 貼り付け                              | :kbd:`Ctrl` + :kbd:`V`                                                             |
      +---------------------------------------+------------------------------------------------------------------------------------+
      | 削除                                  | :kbd:`Ctrl` + :kbd:`D`                                                             |
      +---------------------------------------+------------------------------------------------------------------------------------+
      | リネーム                              | :kbd:`F2`                                                                          |
      +---------------------------------------+------------------------------------------------------------------------------------+

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
 - Randomly Atomic Shift
    元構造からランダムに原子を動かした構造を生成します。
 - Trajectory of MD (LAMMPS)
    元構造からLAMMPSで分子動力学計算を実行し、そのトラジェクトリーから構造を抽出します。 :guilabel:`Calculate MD` のボタンをクリックするとLAMMPSの画面が開きますので、設定を行い、左下メニューの :guilabel:`Run` から計算を実行してください。
 - Monte-Carlo (Metropolis)
    NeuralMDを使い、元構造からメトロポリス法によるモンテカルロ計算で構造を生成します。予めニューラルネットワークの学習を行っておく必要があります。 :guilabel:`Calculate MD` のボタンをクリックするとメトロポリス法の設定画面が開きますので、設定を行い、左下メニューの :guilabel:`Run` から計算を実行してください。

   .. toctree::
      :maxdepth: 1

      メトロポリス法の使い方 <metro>

 .. note:: 座標を固定した原子がある場合、ランダム構造生成時にもその座標は固定されたままになります。

 :guilabel:`Generate Geometries` をクリックすると、指定した設定でランダム構造を生成（抽出）します。

Calculation of Q.E.
 生成したランダム構造に対し、SCF計算を実行します。

 - 同一のグランドプロジェクト内であっても、設定ごとに別の計算サーバーで計算を実行することもできます。

 Result画面では、計算の状況を確認できます。ダウンロードボタン |granddownload| をクリックすると計算サーバーから結果一式をダウンロードし、進捗を更新します（負荷を抑えるため、自動的には更新されません）。 :guilabel:`Energy` 、 :guilabel:`Force` から終了した計算の結果をまとめて確認できます。

 .. image:: /img/grandresult.png

.. |granddownload| image:: /img/granddownload.png

.. _grand_neumd_export:

ニューラルネットワークの学習・テスト
------------------------------------------

画面右側の :guilabel:`Training Neural Network Potential` にある :guilabel:`Start Training NNP` をクリックすると、グランドプロジェクト内で計算が終了しているものを集計し、教師データとして、ニューラルネットワークの学習を行う画面が開きます。
 
- 計算サーバーで計算を実行した場合は、自動的に結果を取得し、集計します。

設定項目の詳細については、NeuralMDのドキュメントにある設定ファイルの説明 `sannp.prop <https://neuralmd-doc.readthedocs.io/ja/latest/usage/prop.html>`_ , `sannp.behler <https://neuralmd-doc.readthedocs.io/ja/latest/usage/behler.html>`_ の対応する項目を参照してください。

.. image:: /img/nnp_setting.png

設定後、左下メニューの :guilabel:`Run` から学習（最適化）を実行します。

実行後、タブに戻るとResult画面が表示され、計算の状況を確認できます。 :guilabel:`RMSE` ボタンで収束の様子が確認できます。 :guilabel:`Classical Potential` （|Delta|-NNP法）を有効にした場合、 :guilabel:`LJ-like.pot` で古典力場の形状を確認できます。

:guilabel:`force-field` をクリックすると、学習したニューラルネットワークをLAMMPSの力場ファイルとして保存できます。

.. hint:: 作成した力場ファイルを使って分子動力学計算を行うには、LAMMPSのプロジェクトの :guilabel:`Force-Field` 設定画面で :guilabel:`Type of Force Field` をNeuralMDまたはNeuralMD with Chargeに設定して、 :guilabel:`Potential File` で作成した力場ファイルを選択します。

.. image:: /img/nnpresult.png

また、既にニューラルネットワークの学習を行ったグランドプロジェクトで :guilabel:`Testing Neural Network Potential` にある :guilabel:`Start Testing NNP` をクリックすると、ニューラルネットワーク力場のテスト（エネルギー・力・電荷の教師データとの比較）を実行します。Result画面の :guilabel:`Tested` ボタンで結果を確認できます。

.. |Delta| raw:: html

 &Delta;