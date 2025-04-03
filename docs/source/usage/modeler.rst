.. _modeler:

===========================
モデラ―
===========================

原子構造の高度な編集を行います。左下のメニュー |projectmenuicon| から :guilabel:`Modeler` をクリックして、モデラ―画面を開いてください。

画面右側のパネルから、各モデリング機能を使用します。複数の機能を続けて使うことも可能です。

モデラ―上で行った編集は、 :guilabel:`Reflect on Input-file` をクリックすることでプロジェクトに反映されます。 :guilabel:`Initialize Model` をクリックすると、編集を行う前（モデラー画面を開いた時点）の状態に戻ります。

編集が終わりましたら、左下の戻るボタン |back| をクリックしてプロジェクト画面に戻ります。

.. |projectmenuicon| image:: /img/projectmenuicon.png

.. _autopilot:

Autopilot
==========

ChatGPTを活用し、自然言語による命令でモデルを作成する機能です。モデラー画面右下の :guilabel:`Autopilot` ボタン |autopilot| をクリックすると命令文の入力欄が表示されます。

.. image:: /img/autopilot_interface.png

作成したいモデルの説明を入力してください。 |autopilot_speech| ボタンで音声入力もできます。 |autopilot_submit| ボタンで送信します。 |autopilot_close| ボタンで元の画面に戻ります。

- 命令文の例

 .. table::
  :widths: auto

  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
  |「NMC電極の110表面と、1mol/LのLiBF4のEC:DMC(7:3)溶液の固液界面」                                                                                                                                |
  +================================================================================================================================================================================================+
  |層状LiCoO\ `2`:sub:\ のスーパーセルを作り、CoをMnとNiに置換して(110)スラブを作った後、EC、DMC、Li\ `+`:sup:\ 、BF\ `4`:sub:\ `-`:sup:\ を指定された割合でパッキングします。                     |
  |                                                                                                                                                                                                |
  ||2emdash| AIがNMC電極の意味を理解した上でモデリングします。                                                                                                                                     |
  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

 .. table::
  :widths: auto

  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
  |「Fe/Ni/Cr/Mn＝7/1/1/1の合金」                                                                                                                                                                  |
  +================================================================================================================================================================================================+
  |Feのスーパーセルを作成した後、FeをNiに10.0%置換、FeをCrに11.1%置換、FeをMnに12.5%置換します。                                                                                                   |
  |                                                                                                                                                                                                |
  ||2emdash| AIが元素置換率を自動計算してくれます。                                                                                                                                                |
  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

 .. table::
  :widths: auto

  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
  |「ZrO2(001)/Rh(111) + 2 x NO\@hollow」                                                                                                                                                          |
  +================================================================================================================================================================================================+
  |ZrO\ `2`:sub:\ (001)とRh(111)の界面モデルを作成して、その上に一酸化窒素分子をホローサイトに2つ吸着させます。                                                                                    |
  |                                                                                                                                                                                                |
  ||2emdash| AIは化学式を使った曖昧な表現も理解します。                                                                                                                                            |
  +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

命令文が解釈されると、それに対応するモデラーの操作手順が表示されます。\ :guilabel:`Run`\ をクリックすると実際に手順が実行されます。

.. image:: /img/autopilot_procedure.png

- Full-Auto

 ユーザーが操作することなく、すべてのステップが自動的に実行され、モデルが作成されます。

- Semi-Auto

 各ステップで説明が表示され、それに従いユーザーが操作を行います。パラメーター等の詳細を手動で設定したい場合に便利です。

 左下の矢印が赤く |back_red| なっている場合、クリックすることで次のステップに進みます。

.. note:: 本機能は外部のサーバーに接続して実行されるため、インターネット接続が必要です。

.. note:: 命令文の送信、音声入力にはそれぞれ1日当たりの上限を設定しています。上限に達した場合、当日中は当該の機能を使用できなくなります。

左上メニュー |mainmenuicon| から :menuselection:`Properties --> Autopilot` で設定画面を開きます。利用規約の確認や、命令文の製品開発への利用を許可するかの設定変更もこちらで行えます。

.. |autopilot| image:: /img/autopilot.png
.. |autopilot_speech| image:: /img/autopilot_speech.png
.. |autopilot_submit| image:: /img/autopilot_submit.png
.. |autopilot_close| image:: /img/autopilot_close.png
.. |back_red| image:: /img/back_red.png

.. |rarr| raw:: html

   &rarr;

.. |2emdash| raw:: html

   &#11834;

.. _translation:

並進移動
==========

:guilabel:`Cell` タブの :guilabel:`Translation of Cell` で、すべての原子を同じ方向・距離に移動させます。各単位格子ベクトルのスライダーを動かすと、リアルタイムでビューワーに反映されます。

.. _supercell:

スーパーセル
================

:guilabel:`Cell` タブの :guilabel:`Super Cell` で、単位格子を繰り返した構造のスーパーセルを作成します。 :guilabel:`Scaling` 欄の3つのテキストボックスに、a、b、c軸方向の繰り返し回数をそれぞれ入力し、 :guilabel:`Build` をクリックしてください。

.. image:: /img/supercell.svg

.. _nondiagsupercell:

より一般的なスーパーセル
=========================

:guilabel:`Lattice` タブの :guilabel:`Super Cell` では、各軸方向の繰り返しにとどまらず、格子ベクトルの方向の取り直しを伴うようなより一般的なスーパーセルが生成できます。

- :guilabel:`As Miller Index` : 各格子ベクトルの変換先をミラー指数で指定（つまり、格子ベクトルに対する変換行列を入力）します。

- :guilabel:`As Dual Vector` : 入力値の逆数の比に対し、それと等しくなるような最小の整数比を計算して、ミラー指数とします。

変換行列の各成分が整数であることにより、変換後の格子もまた単位格子となります。

.. image:: /img/nondiagsupercell.svg

.. _latticevector:

格子ベクトルの編集
====================

:guilabel:`Lattice` タブの :guilabel:`Lattice Vectors` で、格子ベクトルの編集をします。

- :guilabel:`Affine Positions` : 格子と同時に原子座標も変換します。

- :guilabel:`Leave Positions` : 原子座標は変換しません。

:guilabel:`Refine` をクリックすると、Quantum ESPRESSOのブラベー格子表現に適した格子ベクトルへの変換を行います。

.. _atompositions:

原子位置の調整
================

位置を調整したい原子を選択してから、 :guilabel:`Atom` タブの :guilabel:`Start Modeling` をクリックします。

- |Delta|\ X(\ |Delta|\ Y, |Delta|\ Z) / Angs. のスライダーで、各座標軸方向に移動します。スライダーの右クリックメニューの :guilabel:`Input directly` で値を直接入力できます。

- :guilabel:`X(Y, Z)-Mobility` で、各座標軸方向の固定・可動を設定します。この設定は構造最適化や分子動力学計算を行う際に適用されます。

- :guilabel:`Rotation` で、選択原子の幾何中心に対して回転移動します。 :guilabel:`Rotate Atoms` をクリックすると球が表示されますので、ドラッグして回転移動を行います。 :kbd:`Esc` キーを押すと、位置が確定します。

.. |Delta| raw:: html

   &Delta;

.. _conversion:

結晶格子の変換
================

モデルの格子ベクトルを再定義し、結晶格子を変換します。

:guilabel:`Crystal` タブの :guilabel:`Conversion of Cell Type` の各 :guilabel:`Build` ボタンをクリックすると、変換が行われます。

- Finding a Primitive Cell
- Finding a Standard Cell
   基本単位胞・慣用単位胞を自動的に決定し、相互に変換します。

   .. image:: /img/primitive_standard.svg

- More Symmetric Cell
   ある程度の原子位置のずれを許容し、より対称性の高い結晶構造を探索します。 |settingicon| ボタンから対称性判定の閾値を設定できます。

.. |settingicon| image:: /img/setting.png

- Hexagonal -> Orthorhombic
- Orthorhombic -> Hexagonal
   六方晶・直方晶（斜方晶）を相互に変換します。

   .. image:: /img/hexa_ortho.svg

また、 :guilabel:`Cell` タブの :guilabel:`Operation for Axis` の各ボタンで、格子ベクトルの反転操作、および格子ベクトルの入れ替えができます。

.. _substitution:

元素置換
================

モデル中の原子の一部を異なる種類に変更します。

:guilabel:`Crystal` タブの :guilabel:`Element Substitution` にある :guilabel:`Start Modeling` をクリックすると、元素置換を行う画面が表示されます。

:guilabel:`Element to be Substituted` （置換元の元素）、 :guilabel:`For What Element ?` （置換先の元素）、 :guilabel:`Super Cell` （スーパーセルを作成する場合その繰り返し回数）、 :guilabel:`Rate of Substitution` （置換する割合）を順に設定してください。 :guilabel:`Next` で次の項目、 :guilabel:`Previous` で前の項目の設定に移ります。設定が終わったら、 :guilabel:`Build` をクリックすると、置換後の構造がビューワー内に表示されます。また、置換後の構造の対称性がビューワー内に表示されます。 そのまま再度 :guilabel:`Build` をクリックすると、同じ置換設定で異なる構造が表示されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. _defect:

点欠陥（空孔）
=================

モデル中の原子の一部を取り除き、点欠陥（空孔）を作成します。

:guilabel:`Crystal` タブの :guilabel:`Lattice Defect` にある :guilabel:`Start Modeling` をクリックすると、点欠陥を作成する画面が表示されます。

:guilabel:`Element to be Removed` （取り除く元素）、 :guilabel:`Super Cell` （スーパーセルを作成する場合その繰り返し回数）、 :guilabel:`Rate of Lattice Defect` （取り除く割合）を順に設定してください。 :guilabel:`Next` で次の項目、 :guilabel:`Previous` で前の項目の設定に移ります。設定が終わったら、 :guilabel:`Build` をクリックすると、欠陥を入れた構造がビューワーに表示されます。 また、欠陥を入れた構造の対称性がビューワー内に表示されます。そのまま再度 :guilabel:`Build` をクリックすると、同じ設定で異なる構造が表示されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. _slab:

スラブモデル
================

表面などの非周期系を近似的に周期的境界条件で扱う、スラブ近似のためのモデルを作成します。

:guilabel:`Slab` タブの :guilabel:`Slab Model` で、表面となる結晶面をミラー指数で指定し、 :guilabel:`Build` をクリックすると、スラブモデルの詳細設定を行う画面が表示されます。

スラブの厚さを :guilabel:`Slab System` の :guilabel:`Width / Cell` スライダーで、真空層の厚さを :guilabel:`Vacuum of a Side` の :guilabel:`Width / Angs.` スライダーで変更します。 :guilabel:`Area Scaling` のテキストボックスに繰り返し回数をそれぞれ入力し、 :guilabel:`Build` をクリックすると、スラブの層内方向に繰り返した構造を生成します。 

複数の異なる表面原子構造が存在する場合、 :guilabel:`Kind of Surface` に複数の候補が表示されますので、クリックして選択してください。

変更はリアルタイムでビューワーに反映されます。

:guilabel:`Initialize Model` をクリックすると、詳細設定を行う前（スラブモデル画面を開いた時点）の状態に戻ります。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

また、スラブモデル作成後、 :guilabel:`Editing Slab Model` の各ボタンから、スラブモデルに対する追加の編集が可能です。

.. |back| image:: /img/back.png

.. image:: /img/slab.png

.. _adsorption:

分子吸着
=================

スラブモデルの表面に分子を吸着します。

スラブモデルを用意し、:guilabel:`Slab` タブの :guilabel:`Molecular Adsorption onto Slab` にある :guilabel:`Start Modeling` をクリックしてください。分子吸着を行う画面が表示されます。

:guilabel:`Adsorbate Molecule / Atom` （吸着する分子）、 :guilabel:`Adsorption Site` （吸着サイトの種類）を順に設定してください。 :guilabel:`Next` で次の項目、 :guilabel:`Previous` で前の項目の設定に移ります。

- :guilabel:`Adsorbate Molecule` はあらかじめ用意されたものに加え、左上メニュー |mainmenuicon| から :menuselection:`Import --> Import Adsorbate molecule` でインポートしたものも使えます。

吸着の方法には、:guilabel:`Adsorption to Single Site` （選択した単一サイトへの吸着）と、 :guilabel:`Rate of Occupied Sites` （サイトの占有率を指定した吸着）があります。使用したい方を選択してください。

:guilabel:`Adsorption to Single Site` では、a軸・b軸方向の位置をスライダーで変更するか、サイトに振られた通し番号を使って、サイトを指定してください。

:guilabel:`Rate of Occupied Sites` では、占有率を入力して :guilabel:`Build` をクリックすると、分子を吸着した構造がビューワー内に表示されます。そのまま再度 :guilabel:`Build` をクリックすると、同じ設定で異なる構造が表示されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. |mainmenuicon| image:: /img/mainmenuicon.png
.. |increment| image:: /img/increment.png
.. |decrement| image:: /img/decrement.png

.. image:: /img/adsorption.png

.. _interface:

界面モデル（Pro版のみ）
=========================

格子定数の異なる2つの結晶モデルから、界面モデルを作成します。

:guilabel:`Slab` タブの :guilabel:`Interface Model` にある :guilabel:`Start Modeling` をクリックしてください。界面モデル作成を行う画面が表示されます。

まず、2つのスラブモデルを作成します。画面左のモデルに対し、表面となる結晶面を :guilabel:`Miller Index` で指定し、 :guilabel:`Build` をクリックしてスラブモデルを作成します。続けて、右上に赤く表示されているimportボタン |import_red| をクリックするとエクスプローラーが表示されますので、もう一つのモデルをダブルクリックして選択します。画面右にモデルが設定されたら、こちらもミラー指数を入力し、スラブモデルを作成します。

中央の :guilabel:`Build Interface` ボタンをクリックすると、界面を作成する画面に移ります。

.. image:: /img/interface1.png

:guilabel:`Acceptable Strain` （許容する格子定数の歪み）を入力し、  :guilabel:`Next` をクリックすると、界面を探索し、結果が表示されます。問題が無ければ、さらに  :guilabel:`Next` をクリックします。a軸・b軸方向の位置をスライダーで動かして調節できます。  :guilabel:`Optimize` をクリックすると、古典力場を使ってスラブ間の距離を最適化します。

ビューワー右上の :guilabel:`finish modeling` ボタン |finish| をクリックすると、表示されている構造が確定され、モデラー画面に戻ります。

.. |import_red| image:: /img/import_red.png
.. |finish| image:: /img/finish.png

.. image:: /img/interface2.png

.. _drawing:

分子エディタ―
================

分子エディタ―\ `JSME <https://jsme-editor.github.io/>`_\ を使用し、作図した構造をそのままモデルとして使用できます。

:guilabel:`Molecule` タブの :guilabel:`Drawing a Molecule` にある :guilabel:`Start Modeling` をクリックすると、左側に分子エディタ―、右側に3Dモデルが表示されます。エディター上で作図した構造がリアルタイムで3Dモデルとして表示されます。

エディターの使用方法については、JSMEの\ `ヘルプ <https://jsme-editor.github.io/help.html>`_\ を参照してください。

.. image:: /img/drawing.png

左下の戻るボタン |back| をクリックすると、作図した構造が確定され、モデラ―画面に戻ります。このとき前のモデルは上書きされます。

.. _packing:

分子充填
================

モデルの空いている領域に、小分子を充填します。

分子を充填できる空間を持ったモデルを用意し、:guilabel:`Molecule` タブの :guilabel:`Packing Molecules` にある :guilabel:`Start Modeling` をクリックしてください。分子充填を行う画面が表示されます。

右側のパネルの :guilabel:`Molecules to be Packed` で、充填する分子とその数を設定します。最初は分子のリストに水が設定されています。

- リストに分子を追加するには、 |add| ボタンをクリックします。エクスプローラーが表示されますので、分子をダブルクリックして選択してください。この場で :guilabel:`Materials Finder` を使ってモデルを検索し、そのまま使うこともできます。リストに分子が追加されたら、充填する数を入力します。

- リストから分子を削除するには、右側の |remove| ボタンをクリックします。

充填する分子を設定し終わったら、 :guilabel:`Build` をクリックしてください。充填後の構造がビューワー内に表示されます。そのまま再度 :guilabel:`Build` をクリックすると、同じ設定で異なる構造が表示されます。

また、 :guilabel:`Resize Cell by Density` を使って密度を指定した充填もできます。リストに複数種の分子がある場合は合計の密度となります。

- 分子モデルの場合：立方体のセルを作成します。 :guilabel:`Resize` 後に :guilabel:`Build` をクリックすると指定した密度のモデルが作成できます。

- スラブモデルの場合：真空層の厚さを調整します。 :guilabel:`Resize` 後に :guilabel:`Build` をクリックすると真空層に指定の密度で分子が充填されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. |add| image:: /img/add.png
.. |remove| image:: /img/remove.png

.. image:: /img/packing.png

.. _polymer:

高分子モデラー（Pro版のみ）
===============================

単量体（モノマー）のモデルから、高分子（ポリマー）のモデルを作成し、空間に充填します。

モノマーのモデルを用意し、 :guilabel:`Molecule` タブの :guilabel:`Polymer Model` にある :guilabel:`Start Modeling` をクリックしてください。高分子モデル作成を行う画面が表示されます。

まず、 :guilabel:`Define box` ダイアログで高分子を充填する空間の大きさを指定します。次に、モノマーのモデルが表示されますので、始端となる原子をダブルクリックして選択し、 :guilabel:`OK` をクリックします。続けて終端となる原子も同様に選択します。

.. image:: /img/monomer.png

選択後、画面下側の :guilabel:`Sequence of Polymer` に行が追加されます。 :guilabel:`oneself` の右下にある欄に重合度、 :guilabel:`#Chains` に充填する高分子の数を入力します。

複数の高分子を同時に充填することもできます。別の高分子を追加するには :guilabel:`Add Polymer` をクリックし、モノマーを選択してから設定を行います。高分子を削除するには、 :guilabel:`#Chains` の右にある |remove| ボタンをクリックします。

また、モノマー枠の左側（右側）にある |add| ボタンをクリックすることで、始端（終端）に別の高分子を繋ぐことができます。 |remove| ボタンをクリックすると、その枠の高分子を削除します。また、矢印ボタンを使って高分子を繋げる順番を入れ替えられます。

充填する空間の大きさを編集するには、 |box| ボタンをクリックします。XYZ方向の大きさを |angs| 単位で入力し、 |box| アイコンをクリックすると設定されます。

高分子の設定が終わったら、 :guilabel:`Build` をクリックしてください。充填後の構造が画面上側のビューワー内に表示されます。そのまま再度 :guilabel:`Build` をクリックすると、同じ設定で異なる構造が表示されます。

左下の戻るボタン |back| をクリックすると、ビューワーに表示されている構造が確定され、モデラ―画面に戻ります。

.. image:: /img/polymer.png

また、スラブモデルの真空層等に高分子を充填することも可能です。分子を充填できる空間を持ったモデルを用意し、そのプロジェクトで高分子モデラーを開きます。 :guilabel:`Add Polymer` で高分子を追加すると、生成した分子をモデルの空いている部分に充填します。

.. |box| image:: /img/box.png

.. |angs| raw:: html

   &#8491;
