.. _inputeditor:

==============================
入力ファイルエディター
==============================

プロジェクト画面右側のパネルで、計算エンジンの入力ファイルを編集します。各設定項目にはあらかじめ値が入力されており、そのまま計算を実行することもできますが、各計算エンジンのマニュアルを参照して適切な値を設定してください。

デフォルト値設定ボタン |default| がある設定項目は、ボタンをクリックするとデフォルト値が入力されます。

折り畳まれて表示されていない項目（右三角アイコン |collapse| ）は、クリックして展開することで表示できます。

.. |default| image:: /img/default.png
.. |collapse| image:: /img/collapse.png

.. _texteditor:

内蔵テキストエディタ―
===================================

左下のメニュー |projectmenuicon| から :guilabel:`Input-file` を開くと、作成される入力ファイルの内容を内蔵テキストエディタ―で確認することができます。

画面右側のパネルで変更した設定項目は、再読み込みボタン |reloadac| をクリックすることでテキストエディタ―側に反映されます。

また、テキストエディタ―で入力ファイルの内容を直接変更することもできます。変更した内容は、アップロードボタン |up| をクリックすることで画面右側のパネルに反映されます。

.. |projectmenuicon| image:: /img/projectmenuicon.png
.. |reloadac| image:: /img/reloadac.png
.. |up| image:: /img/up.png

.. note::
   テキストエディターの内容は、実際の入力ファイルを開いているわけではなく、設定項目から生成された一時的なものです。
   アップロードボタンをクリックしてから保存をすることで、実際の入力ファイルに反映されます。
   アップロードボタンをクリックしなかった場合、保存をしても実際の入力ファイルには反映されません。

.. _scheme:

LAMMPSのScheme（計算過程）
==============================

計算エンジンでLAMMPSを選んだ場合に、入力ファイルエディターの :guilabel:`Scheme` で計算過程の設定を行います。画面右下のメニュー |editormenuicon| から :guilabel:`Scheme` をクリックしてください。

.. |editormenuicon| image:: /img/editormenuicon.png

画面右側のパネルで計算の設定を行い、 :guilabel:`Add Scheme` の :guilabel:`Apply` をクリックすると、画面左側に設定内容がタイル状に表示されます。必要に応じ、設定→ :guilabel:`Apply` を繰り返して過程を追加していきます。

タイルの左上の数字が過程の実行される順番です。前へボタン |lpback| 、後へボタン |lpfwd| で順番を入れ替えます。削除ボタン |lpdel| で削除します。

.. |lpback| image:: /img/lpback.png
.. |lpfwd| image:: /img/lpfwd.png
.. |lpdel| image:: /img/lpdel.png

追加済みのタイルの設定を後から編集するには、タイルをダブルクリックしてください。 :guilabel:`Set the scheme` ウィンドウが表示され、設定を編集できます。

.. image:: /img/scheme.png 