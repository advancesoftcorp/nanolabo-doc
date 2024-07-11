.. _result:

=================
結果表示
=================

計算を実行したプロジェクトのタブを開くと、表示可能な計算結果がタイル状に一覧表示されます。（結果画面が表示されていない場合は、まず左下のメニュー |projectmenuicon| から :guilabel:`Result` をクリックしてください。）

.. |projectmenuicon| image:: /img/projectmenuicon.png

表示したいものを選んでクリックすると、可視化された計算結果の画面を表示します。左下の戻るボタン |back| をクリックすると一覧表示に戻ります。

.. |back| image:: /img/back.png

.. image:: /img/result.png

リモートのサーバーで計算を実行している場合、結果表示画面が出ている間はリアルタイムでアクセスを行い、結果を取得しています。

右側のパネルにある |disconnect| :guilabel:`Disconnect from Server` アイコンをクリックすると、アクセスを一時停止します。自動的にダウンロードされるのは可視化に必要なファイルのみですが、 |download| :guilabel:`Download All Files from Server` アイコンをクリックするとそのプロジェクトの全てのファイルをダウンロードします。また、サーバーのファイル容量が問題になる場合には、ダウンロード後に |delete| :guilabel:`Delete All Files on Server` を使って削除できます。

.. |disconnect| image:: /img/disconnect.png
.. |download| image:: /img/download.png
.. |delete| image:: /img/delete.png

:doc:`SSHサーバーの設定<sshserver>`\ で常時オフラインモードに設定している場合、結果画面を開いた時点でアクセスを一時停止した状態になっています。この状態でも、 :guilabel:`Download Time` を設定していれば、その間隔でファイルの取得が行われます。取得中は、ダウンロード中を表すアイコン |download_loading| |delete_loading| に変化します。

.. |download_loading| image:: /img/download_loading.png
.. |delete_loading| image:: /img/delete_loading.png

:guilabel:`Files in This Project` の右にあるアイコン |folder| をクリックすると、プロジェクトのフォルダーを外部ファイラーで開きます（リモートで実行した場合でもローカルのフォルダーが開きます）。

.. |folder| image:: /img/folder.png

.. _plot:

2Dプロット
=======================

時系列データや状態密度・バンド構造は2Dプロットで表示します。画面右側のパネルでプロットの体裁を調整します。 :guilabel:`Data Series` でデータ系列ごとに表示・非表示の設定、体裁の調整が可能です。

状態密度のプロットはPDOS電卓を使った詳細な設定が可能です。

.. toctree::
   :maxdepth: 2

   PDOS電卓<resultpdos>

計算実行中の場合、 :guilabel:`Reload` をクリックすると出力ファイルを読み込んで表示を更新します。

:guilabel:`Screen-shot` をクリックしてプロットを画像ファイルに保存します。また、 :guilabel:`Export as CSV file` をクリックすると表示しているデータをCSVファイルとして保存します。

.. hint:: LAMMPSの時系列プロットは、データ数が多い場合には表示速度向上のため一部のデータ点を省略して表示します。この設定は画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> LAMMPS` を開き、 :guilabel:`Data to Plot Graphs` で変更できます。

.. image:: /img/2dplot.png

.. image:: /img/dos.png

.. image:: /img/band.png

.. |mainmenuicon| image:: /img/mainmenuicon.png

.. _viewer3d:

3D表示
=======================

:guilabel:`3D` の各ボタンをクリックすると、SCF計算結果の電荷密度・ポテンシャル・（スピンを有効にしている場合）スピン偏極の空間分布・波動関数が3D表示できます。

.. image:: /img/3dviewer.png

等値面(Isosurface)、点の集合(Cloud)での可視化が可能です。右側パネルには可視化オブジェクトの一覧が表示され、 |eye| で表示／非表示の切り替え、 |edit| で表示の詳細設定を行います。 |add| と |remove| でオブジェクトの追加と削除を行います。

.. |eye| image:: /img/eye.png
.. |edit| image:: /img/edit.png
.. |add| image:: /img/add.png
.. |remove| image:: /img/remove.png

:guilabel:`Referential Data` のボタンをクリックし、あらかじめ計算したデータ（プロジェクト／cubeファイル）を選択することで、差分の表示が可能です。データのメッシュ分割数は一致している必要があります。データを2つ設定すると、2つとも差し引いた値（元データ - #1 - #2）を表示します。

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