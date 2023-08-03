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

 ニューラルネットワークの学習を行う場合は、別途NeuralMDのライセンスが必要です。

 NeuralMDの実行ファイルはNanoLabo Toolに含まれているため、インストールを別途行う必要はありません。リモート実行時にも、他の計算エンジン（QE・LAMMPS）と同様、自動的に実行ファイルをサーバーに転送して実行します。
 
 - ローカル（NanoLaboを使っているマシン）で実行する場合は、 画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Advance/NeuralMD` でライセンスファイルの場所を設定してください。

 - リモート（計算サーバー等）で実行する場合は、ライセンスサーバーの設定が必要です。

  - Windowsから操作する場合、弊社ツール\ `remoteLicense <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を使うことで、簡単にLinuxマシン上でライセンスサーバーを起動することができます。詳細は\ `マニュアル <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を参照してください。

  - Linux上で操作する場合、NeuralMDのインストーラーにライセンスサーバーの実行ファイルが含まれていますので、ライセンスサーバーとして使うマシンにインストールを行い、\ `ドキュメント <https://neuralmd-doc.readthedocs.io/ja/latest/install/linux.html#launchl>`_\ に従ってライセンスサーバーを起動してください。NanoLaboの方では、必要に応じ、:guilabel:`Job Script` の設定画面で環境変数 :envvar:`ADVANCED_LICENSE_FILE` を追加してください。

  - メトロポリス法による構造生成・ニューラルネットワークのテストについては、ライセンスは必要ありません。

 - macOSでNanoLaboをご使用の場合、リモート実行でNeuralMD連携機能をお使いいただけます（現在NeuralMD macOS版がリリースされていないため、ローカル実行はできません）。

.. |mainmenuicon| image:: /img/mainmenuicon.png

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
#. NNP設定画面が開きます。 :menuselection:`左下メニュー --> Run` でニューラルネットワークの学習を実行します。（Windowsでローカル実行する場合は :guilabel:`#Processes` を1に設定）
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

   `*`:sup: macOSでは :kbd:`Ctrl` |rarr| :kbd:`command` と読み替えてください。

.. hint:: 1つのグランドプロジェクト内にバルクモデルとスラブモデルなど異なる構造を設定し、まとめて教師データにする、という使い方ができます。

また、1つの元構造から、異なる複数の設定でランダム構造を生成することもできます。最初は構造生成の設定が1つだけ(Random Geometries #1)ある状態です。カラム内の :guilabel:`Add Random Geometries` で設定の追加、:guilabel:`Remove Random Geometries` で設定の削除ができます。

.. hint:: 元となる構造から2通りの設定でランダム構造を生成し、片方は教師データ、もう片方はテストデータにする、という使い方ができます。

.. |remove| image:: /img/remove.png

.. |rarr| raw:: html

   &rarr;

.. _grand_neumd_setting:

元構造・ランダム構造生成の設定項目
------------------------------------------

Edit Input File of Q.E.
 SCF計算の設定をします。この設定がカラム内のランダム構造の計算に適用されます。また、カラムが複数ある場合は、設定の変更が他のカラムにも反映されます（教師データ内でSCF計算条件を揃えるため）。

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
    NeuralMDを使い、元構造からメトロポリス法によるモンテカルロ計算で構造を生成します。予めニューラルネットワークの学習を行っておく必要があります。 :guilabel:`Calculate MC` のボタンをクリックするとメトロポリス法の設定画面が開きますので、設定を行い、左下メニューの :guilabel:`Run` から計算を実行してください。

   .. toctree::
      :maxdepth: 1

      メトロポリス法の使い方 <metro>

 :guilabel:`Generate Geometries` をクリックすると、指定した設定でランダム構造を生成（抽出）します。

 - Self-Learning Hybrid MC
    自己学習ハイブリッドモンテカルロ法(SLHMC)を実行し、その過程で生成された構造を使います。 :guilabel:`Edit SLHMC Input` のボタンをクリックするとSLHMCの設定画面が開きます。設定を行ったらタブを閉じて戻り、 :guilabel:`Run` ボタンで計算を実行してください。

    - `SLHMCの設定項目詳細（NeuralMDマニュアル） <https://neuralmd-doc.readthedocs.io/ja/latest/slhmc/prop.html>`_
    - ここでのSLHMC設定画面のデフォルトパラメータは構造生成を目的としたものであるため、力場生成時とは異なるものになっています。
    - SLHMCの過程でSCF計算が行われるため、別途Quantum ESPRESSOの計算実行は必要ありません。

 .. note:: 座標を固定した原子がある場合、ランダム構造生成時にもその座標は固定されたままになります。

Calculation of Q.E.
 生成したランダム構造に対し、SCF計算を実行します。

 - 同一のグランドプロジェクト内であっても、設定ごとに別の計算サーバーで計算を実行することもできます。

 Result画面では、計算の状況を確認できます。ダウンロードボタン |granddownload| をクリックすると計算サーバーから結果一式をダウンロードし、進捗を更新します（負荷を抑えるため、自動的には更新されません）。 :guilabel:`Energy` 、 :guilabel:`Force` から終了した計算の結果をまとめて確認できます。

 ダウンロード抑止ボタン |grandavoiddownload| をクリックして有効にしておくと、教師データを集計するときに自動的にダウンロードを行わないようになります。

 .. image:: /img/grandresult.png

.. |granddownload| image:: /img/granddownload.png
.. |grandavoiddownload| image:: /img/grandavoiddownload.png

.. _grand_neumd_export:

ニューラルネットワークの学習・テスト
------------------------------------------

画面右側の :guilabel:`Training Neural Network Potential` にある :guilabel:`Start Training NNP` をクリックすると、グランドプロジェクト内で計算が終了しているものを集計し、教師データとして、ニューラルネットワークの学習を行う画面が開きます。
 
- 計算サーバーで計算を実行した場合は、自動的に結果を取得し、集計します。

設定項目の詳細については、NeuralMDのドキュメントにある設定ファイルの説明 `sannp.prop <https://neuralmd-doc.readthedocs.io/ja/latest/usage/prop.html>`_ , `sannp.behler <https://neuralmd-doc.readthedocs.io/ja/latest/usage/behler.html>`_ の対応する項目を参照してください。

- :guilabel:`Training w/o Force` をyesにすると、力の損失関数の係数 ``coefForce`` が0になり、エネルギーだけを使って学習します。

.. image:: /img/nnp_setting.png

設定後、左下メニューの :guilabel:`Run` から学習（最適化）を実行します。

.. note:: Windows版NeuralMDは現在MPI並列に対応していないため、Windowsでローカル実行する場合は :guilabel:`#Processes` を1に設定してください。OpenMP並列は使用可能です。

.. hint::

 Advance/NeuralMD Pro版をお使いの場合、GPUを使って計算を高速化することができます。

 - （Linuxのみ）ローカルで実行する場合、 :menuselection:`メインメニュー --> Properties --> Advance/NeuralMD` の :guilabel:`Number of GPU` に使用するGPUの数を設定します。複数のGPUを使用する設定の場合、MPI並列のプロセスを各GPUに均等に割り当てて実行されます。0を設定するとGPUを使用しません。
 - リモートで実行する場合、\ :doc:`SSHサーバーの設定<sshserver>`\ で使用するキューのGPU設定を有効にしてください。

 .. note::

  - GPUドライバを事前にインストールしておく必要があります。CUDA 11.4.4を使用しており、これに対応するドライババージョン470.82.01以上が必要です。
  - 元素数が5以上の場合は、重み付き対称関数を使う（\ :guilabel:`Element Weight`\ をyesに設定する）必要があります。

実行後、タブに戻るとResult画面が表示され、計算の状況を確認できます。

- :guilabel:`RMSE` ボタンで収束の様子が確認できます。
- :guilabel:`Classical Potential` （|Delta|-NNP法）を有効にした場合、 :guilabel:`LJ-like.pot` で古典力場の形状を確認できます。

:guilabel:`force-field` をクリックすると、学習したニューラルネットワークをLAMMPSの力場ファイルとして保存できます。

.. hint:: 作成した力場ファイルを使って分子動力学計算を行うには、LAMMPSのプロジェクトの :guilabel:`Force-Field` 設定画面で :guilabel:`Type of Force Field` をNeuralMDまたはNeuralMD with Chargeに設定して、 :guilabel:`Potential File` で作成した力場ファイルを選択します。

.. image:: /img/nnpresult.png

また、既にニューラルネットワークの学習を行ったグランドプロジェクトで :guilabel:`Testing Neural Network Potential` にある :guilabel:`Start Testing NNP` をクリックすると、ニューラルネットワーク力場のテスト（エネルギー・力・電荷の教師データとの比較）を実行します。Result画面の :guilabel:`Tested` ボタンで結果を確認できます。

.. |Delta| raw:: html

 &Delta;

.. _grand_neumd_import:

教師データ・テストデータのインポート
------------------------------------------

既に計算済みの教師データ( :file:`sannp.train` )・テストデータ( :file:`sannp.test` )をグランドプロジェクトにインポートするには、画面右側の :guilabel:`Open Project of NNP` をクリックしてNNPの設定画面を開き、左下メニューの :guilabel:`Import TRAIN-data` または :guilabel:`Import TEST-data` からインポートするファイルを選択してください。グランドプロジェクトに含まれるデータを入れ替えるか、データを残して追加するかをダイアログで選択します。

.. _grand_neumd_split:

教師データの分割
------------------------------------------

グランドプロジェクトにある教師データを分割し、一部をテストデータにすることができます。NNPの設定画面で左下メニューの :guilabel:`Split TRAIN-data` をクリックすると、テストデータとして分割する割合を指定するダイアログが表示されます。グランドプロジェクトに既にテストデータがある場合は、上書きするかどうかの確認が表示されます。
