.. _windows:

==============================
インストール手順 (Windows)
==============================

.. _preparew:

インストールの準備
==============================

本ソフトウェアのインストールには、インストーラーを使用します。インストーラーは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

 `Advance/NanoLabo (ver.1.0) <https://github.com/advancesoftcorp/nanolabo-doc/releases/download/v1.0/install_nanolabo_windows.exe>`_

 `Advance/NanoLabo Tool (ver.1.0) <https://github.com/advancesoftcorp/nanolabo-doc/releases/download/v1.0/install_nanolabo_tool_windows.exe>`_

また、本ソフトウェアの実行にはJava Runtime Environment 1.8以降が必要です。事前にインストールしていただくようお願いします。

 https://java.com/ja/download/

.. _installerw:

インストール
=============================

まず、Advance/NanoLaboのインストーラーを実行します。

初めに言語の選択画面が出た場合は、インストール中に使用する言語を選択してください（ソフトウェア本体の言語ではありません）。

画面の指示に従い、インストールの設定を行ってください。設定が終わると要約の画面が表示されます。特に、インストールフォルダーはAdvance/NanoLabo Toolのインストール、およびライセンスの設定の際に必要になりますので、控えておいていただくようお願いします。

.. image:: /img/install_summary.png

インストールが終わると、ライセンス登録案内が表示されます。ライセンス登録がお済みでない場合は、必要な項目をご記入ください。次へをクリックすると、ライセンス登録メールの内容が表示されますので、弊社宛に送信してください。

.. image:: /img/install_license.png

.. note::

   ここでライセンス登録を行わない場合でも、ソフトウェア起動時に表示される案内画面から登録していただくことができます。

最後の画面で完了をクリックすると、Advance/NanoLaboのインストールが終了します。

続けて、Advance/NanoLabo Toolのインストーラーを実行します。

画面の指示に従い、インストールの設定を行ってください。インストール先として、Advance/NanoLaboと同じ場所を選択してください。

.. image:: /img/install_tool.png

最後の画面で完了をクリックすると、Advance/NanoLabo Toolのインストールが終了します。

.. _licensew:

ライセンスの設定
=============================

ライセンス登録後、ライセンスファイル( :file:`nanolabo.lic` )をお送りします。インストール先のlicenseフォルダにコピーしてください。

.. _launchw:

起動
=============================

インストール時にショートカットを作成した場合は、ショートカットから起動してください。

直接起動する場合は、インストール先のbinフォルダにあるNanoLabo.exeを起動してください。

.. _uninstallw:

アンインストール
=============================

次のいずれかの方法でアンインストーラーを起動してください。

* スタートメニューを右クリックし、「アプリと機能」を開きます。リストの中にあるAdvance/NanoLabo Toolをクリックし、アンインストールボタンをクリックします。
* スタートメニューから「Windows システム ツール」内の「コントロール パネル」を開きます。「プログラムと機能」を開き、リストの中にあるAdvance/NanoLabo Toolをダブルクリックします。
* インストール先の_NanoLabo_Tool_installationフォルダにあるChange NanoLabo Tool Installation.exeを起動します。

画面の指示に従い、アンインストールを行ってください。

Advance/NanoLabo Toolのアンインストールが終わったら、同様にAdvance/NanoLaboをアンインストールしてください。

.. note::

   アンインストールの際に、インストール先のライセンスファイルは削除されずに残ります。また、インストールログファイルが残る場合があります。その際はお手数ですが手動で削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所（ :file:`C:\\Users\\ユーザ名\\.nanolabo` ）に保存され、アンインストール時には削除されません。必要に応じ、手動で削除してください。