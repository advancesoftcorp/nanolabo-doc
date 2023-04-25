.. _slhmc:

=======================================================================
自己学習ハイブリッドモンテカルロ法による力場自動生成（NeuralMD連携）
=======================================================================

1つの初期構造から自動的にNeuralMDの力場を作る機能です。グランドプロジェクトを使った場合にはユーザーが教師データの生成を行いますが、本機能では1つの初期構造を用意するだけで、教師データの準備を行う必要はありません。

.. note:: 本機能を使う場合は、別途NeuralMDのライセンスが必要です。設定が済んでいない場合は\ :ref:`こちらの説明 <grand_neumd>`\ を参照して設定を行ってください。

.. _slhmc_usage:

使用手順
============

.. _slhmc_initialsetting:

1. 初期構造の用意
------------------

初期構造として使うプロジェクトを開きます。必要に応じ、計算エンジンがQ.E.に設定されている状態で、SCFの設定を行ってください。ここでの設定内容が自己学習ハイブリッドモンテカルロ法の第一原理計算で使われます。

.. _slhmc_slhmcsetting:

2. SLHMCの設定
------------------

画面左下のメニュー |projectmenuicon| から :guilabel:`Change calculator` をクリックし、 :guilabel:`SLHMC` を選んでください。自己学習ハイブリッドモンテカルロ法の設定画面が表示されます。設定項目の詳細については、NeuralMDのドキュメントにある設定ファイルの説明 `slhmc.prop <https://neuralmd-doc.readthedocs.io/ja/latest/slhmc/prop.html>`_ の対応する項目を参照してください。

初期ニューラルネットワーク力場を第一原理分子動力学計算から作らず、既に作成している力場を使いたいという場合は、 :guilabel:`Initial FPMD` を0に設定してから、 :guilabel:`Initial NNP` の :guilabel:`Import File of NNP` をクリックし、\ :file:`ffield.sannp`\ ファイルを選択してください。

.. image:: /img/slhmc_setting.png

.. _slhmc_nnpsetting:

3. NNPの設定
------------------

:guilabel:`Details of NNP` の :guilabel:`Start Setting NNP` をクリックすると、ニューラルネットワーク力場の設定画面が表示されます。設定項目の詳細については、NeuralMDのドキュメントにある設定ファイルの説明 `sannp.prop <https://neuralmd-doc.readthedocs.io/ja/latest/usage/prop.html>`_ の対応する項目を参照してください。

設定が終わったら、画面左下の |projectmenuicon| から :guilabel:`Return to SLHMC` をクリックし、元のプロジェクト画面に戻ります。

.. image:: /img/slhmc_nnp.png

.. _slhmc_run:

4. 実行
------------------

画面左下のメニュー |projectmenuicon| から :guilabel:`Run` をクリックし、実行します。リモートで実行する場合は、ジョブスクリプト\ :file:`nanolabo.sh`\ に加えて、Quantum ESPRESSO、LAMMPS、NeuralMDを呼び出す際に実行されるスクリプトの編集画面も表示されますので、内容を確認し、必要に応じて変更してから :guilabel:`OK` をクリックしてください。

実行後、タブに戻るとResult画面が表示され、初期ニューラルネットワーク力場作成用の第一原理分子動力学計算(FPMD)、ハイブリッドモンテカルロ計算(HMC)の状況を確認できます。計算中は進捗（ :guilabel:`#Steps of Training` に対する割合）が表示されます。ニューラルネットワーク力場は随時更新され、Accepted Rate（モンテカルロ法の採択率）が1に近く、エネルギーの平均絶対誤差(MAE)が小さいほど、性能の良い力場であると判断できます。

:guilabel:`force-field` をクリックすると、学習したニューラルネットワークをLAMMPSの力場ファイルとして保存できます。:guilabel:`train-data` をクリックすると、生成された教師データを保存できます。

.. hint:: 作成した力場ファイルを使って分子動力学計算を行うには、LAMMPSのプロジェクトの :guilabel:`Force-Field` 設定画面で :guilabel:`Type of Force Field` をNeuralMDまたはNeuralMD with Chargeに設定して、 :guilabel:`Potential File` で作成した力場ファイルを選択します。

.. image:: /img/slhmc_result.png

.. |projectmenuicon| image:: /img/projectmenuicon.png
