.. _result:

=================
結果表示
=================

計算を実行したプロジェクトのタブを開くと、表示可能な計算結果がタイル状に一覧表示されます。（プロジェクト画面で入力ファイルエディターが表示されている場合は、まず左下のメニュー |projectmenuicon| から :guilabel:`Result` をクリックしてください。）

.. |projectmenuicon| image:: /img/projectmenuicon.png

表示したいものを選んでクリックすると、可視化された計算結果の画面を表示します。左下の戻るボタン |back| をクリックすると一覧表示に戻ります。

.. |back| image:: /img/back.png

.. image:: /img/result.png

リモートのサーバーで計算を実行している場合、結果表示画面が出ている間はリアルタイムでアクセスを行い、結果を取得しています。右側のパネルにある :guilabel:`Disconnect from Server` アイコンをクリックすると、アクセスを一時停止します。自動的にダウンロードされるのは可視化に必要なファイルのみですが、 :guilabel:`Download All Files from Server` アイコンをクリックするとそのプロジェクトの全てのファイルをダウンロードします。また、サーバーのファイル容量が問題になる場合には、ダウンロード後に :guilabel:`Delete All Files on Server` を使って削除できます。

.. _plot:

2Dプロット
=======================

時系列データや状態密度・バンド構造は2Dプロットで表示します。画面右側のパネルでプロットの体裁を調整します。 :guilabel:`Data Series` でデータ系列ごとに表示・非表示の設定、体裁の調整が可能です。

計算実行中の場合、 :guilabel:`Reload` をクリックすると出力ファイルを読み込んで表示を更新します。

:guilabel:`Screen-shot` をクリックしてプロットを画像ファイルに保存します。また、 :guilabel:`Export as CSV file` をクリックすると表示しているデータをCSVファイルとして保存します。

.. image:: /img/2dplot.png

.. image:: /img/dos.png

.. image:: /img/band.png

.. _movie:

動画
====================

:guilabel:`.movie` をクリックすると、原子構造の変化を動画として表示します。計算実行中の場合、 :guilabel:`Reload` をクリックすると出力ファイルを読み込み、増えたフレーム（コマ）を追加します。

視点の操作は原子構造ビューワーと同様に行うことができます。再生中でも視点を変えられます。

:guilabel:`Screen-shot` をクリックして表示中のフレーム（コマ）を画像ファイルに保存します。 :guilabel:`Save Movie` をクリックしてすべてのフレーム（コマ）を動画ファイルに保存します。

:guilabel:`New Project` をクリックすると、表示中の原子構造を使って新しく別のプロジェクトを作成し、解析を行うことができます。

.. image:: /img/movie.png

.. _phononmode:

フォノンモード
=================

:guilabel:`Phonon.mode` をクリックすると、各振動モードを矢印で可視化することができます。

.. image:: /img/phonon.png

.. _text:

テキスト
===========================

:guilabel:`IN` （入力ファイル）、 :guilabel:`LOG` （ログファイル）、 :guilabel:`ERR` （エラーログファイル）をクリックすると、テキストファイルの内容をそのまま表示します。ファイル内検索、ハイライト表示や抽出も可能です。

:guilabel:`Text editor` をクリックすると、外部のテキストエディターでファイルを開きます。

.. image:: /img/text.png

.. _updateatomconfig:

原子構造の更新
===========================

原子構造の変化を伴う計算を行った後、更新 |updateatomconfig| をクリックすると、プロジェクトの原子構造を変化後のものに更新します。

.. |updateatomconfig| image:: /img/updateatomconfig.png