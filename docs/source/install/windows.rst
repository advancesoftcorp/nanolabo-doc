.. _windows:

==============================
インストール手順 (Windows)
==============================

.. _preparew:

インストールの準備
==============================

本ソフトウェアのインストールには、インストーラーを使用します。インストーラーは3つに分かれています。それぞれ以下のリンクからダウンロードしてください。

- 本体

 `Advance/NanoLabo (ver.3.1) <https://www.nanolabo.advancesoft.jp/?sdm_process_download=1&download_id=3088>`_

- オープンソースの計算エンジン等

 `Advance/NanoLabo Tool (ver.3.1) <https://www.nanolabo.advancesoft.jp/?sdm_process_download=1&download_id=3086>`_

- 追加のGNN力場モデルファイル（FAIR-ChemまたはSevenNetを使う場合のみ）

 `Advance/NanoLabo GNNP (ver.3.1) <https://www.nanolabo.advancesoft.jp/?sdm_process_download=1&download_id=3084>`_

.. note::

   計算をリモートで実行する場合でも、NanoLabo本体と同じマシンにNanoLabo Toolをインストールしてください。

インストーラーにはJava Runtime Environmentが同梱されており、インストール時にインストール先フォルダにコピーされます。

.. _installerw:

インストール
=============================

まず、Advance/NanoLaboのインストーラーを実行します。言語の選択画面が出た場合は、インストール中に使用する言語を選択してください（ソフトウェア本体で使用する言語ではありません）。

画面の指示に従い、インストールの設定を行ってください。

- フローティングライセンスでクライアントとして使用する場合、Sentinel-LDK-RTEをインストールしますか？でいいえを選択してください。

  ライセンスサーバーが異なるネットワークセグメントに存在する場合は、次の画面でライセンスサーバーのIPアドレスまたはホスト名を入力してください。ここで指定しない場合でも、後からライセンスサーバーのIPアドレスまたはホスト名を設定することは可能です。詳細は\ :ref:`floating`\ を参照してください。

  .. image:: /img/install_license_server.png

設定が終わると要約の画面が表示されます。特に、インストールフォルダーはAdvance/NanoLabo Toolのインストールの際に必要になりますので、控えておいていただくようお願いします。

.. image:: /img/install_summary.png

最後の画面で完了をクリックすると、Advance/NanoLaboのインストールが終了します。

続けて、Advance/NanoLabo Toolのインストーラーを実行します。

画面の指示に従い、インストールの設定を行ってください。インストール先として、Advance/NanoLaboと同じ場所を選択してください。

.. image:: /img/install_tool.png

インストール後、最後の画面で完了をクリックすると、Advance/NanoLabo Toolのインストールが終了します。

FAIR-ChemまたはSevenNetを使う場合は、Advance/NanoLabo GNNPも同様にインストールしてください。

.. _launchw:

起動
=============================

インストール時にショートカットを作成した場合は、ショートカットから起動してください。

直接起動する場合は、インストール先の :file:`bin` フォルダーにある :file:`NanoLabo.exe` を起動してください。

初回起動時にはライセンスに関するダイアログが表示されますので、\ :ref:`こちら <licensesetupdate>`\ の手順に従ってライセンスの設定を行ってください。

.. _optionalw:

追加の設定項目
====================

- Materials FinderのAPI設定

   Materials Projectから結晶構造を取得するためにAPIキーの設定が必要です。設定方法は\ :ref:`こちら <materialsfinder>`\ を参照してください。

- グラフニューラルネットワーク汎用力場の設定

   LAMMPSの計算でグラフニューラルネットワーク汎用力場を使うためには、別途Python環境での設定が必要です。設定方法は\ :doc:`こちら </usage/gnnp>`\ を参照してください。

- 汎用タイトバインディング法(ThreeBodyTB)の設定

   汎用タイトバインディング法(ThreeBodyTB)の計算を行うためには、別途Julia環境での設定が必要です。設定方法は\ :doc:`こちら </usage/inputeditortb3>`\ を参照してください。

- リモート計算の設定

   NanoLaboからリモートのマシンに計算ジョブを投入する場合、SSH接続の設定が必要です。設定方法は\ :doc:`こちら </usage/sshserver>`\ を参照してください。

.. _upgradew:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。\ :ref:`licenseupdate`\ を参考にしてライセンスのみを更新してください。

- 新しいバージョンにアップデートされる場合、上書きインストールが可能です。

- メジャーバージョンが新しいNanoLaboにアップデートする場合は、ライセンスの更新が必要です。\ :ref:`licenseupdate`\ を参考にしてライセンスを更新してください。

- NanoLaboと同時にNanoLabo Toolが更新されている場合は、そちらもアップデートしてください。最新版のNanoLabo Toolに同梱されている計算エンジンでの使用を想定しています。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _uninstallw:

アンインストール
=============================

次のいずれかの方法でアンインストーラーを起動してください。

* スタートボタンを右クリックし、「アプリと機能」を開きます。リストの中にあるAdvance/NanoLabo Toolをクリックし、アンインストールボタンをクリックします。
* スタートメニューから「Windows システム ツール」内の「コントロール パネル」を開きます。「プログラムのアンインストール」（アイコン表示の場合は「プログラムと機能」）を開き、リストの中にあるAdvance/NanoLabo Toolをダブルクリックします。
* インストール先の :file:`_NanoLabo_Tool_installation` フォルダーにある :file:`Change NanoLabo Tool Installation.exe` を起動します。

.. note::

   NanoLabo Toolのアンインストーラーを起動しようとしたときに、「ご使用のシステムで適切な Java 仮想マシンが見つかりませんでした。」というエラーが表示される場合があります。Java実行環境をインストールすることで実行できるようになりますが、以下の手順でも回避できます。

   #. インストール先の :file:`_NanoLabo_installation\\Change NanoLabo Installation.lax` を開き、 ``lax.nl.current.vm`` で始まる行をコピーします。
   #. :file:`_NanoLabo_Tool_installation\\Change NanoLabo Tool Installation.lax` を開き、 ``lax.nl.current.vm`` で始まる行を探して、コピーした内容を上書きします。
   
    - :file:`Program Files` への書き込みは制限されているため、管理者権限で実行したテキストエディタを使うか、いったんファイルを別のフォルダに移して編集してから元の場所に戻してください。

画面の指示に従い、アンインストールを行ってください。

Advance/NanoLabo Toolのアンインストールが終わったら、同様にAdvance/NanoLabo GNNP、Advance/NanoLaboをアンインストールしてください。

.. note::

   アンインストールの際に、インストールログファイルが残る場合があります。また、旧ライセンスをご利用の場合は、ライセンスファイルは削除されずに残ります。その際はお手数ですが手動で削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所（ :file:`C:\\Users\\ユーザ名\\.nanolabo` ）に保存され、アンインストール時には削除されません。必要に応じ、手動で削除してください。

   また、Java VMの設定は :file:`C:\\Users\\ユーザ名\\AppData\\Local\\VirtualStore` 内に保存される場合があります。

.. note::

   Sentinel-LDK-RTEは"Thales Sentinel LDK Run-time Environment"という名前でインストールされます。後からアンインストールする場合はそちらをアンインストールしてください。
