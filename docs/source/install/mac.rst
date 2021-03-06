.. _mac:

==============================
インストール手順 (macOS)
==============================

.. _preparem:

インストールの準備
==============================

本ソフトウェアのインストールには、ディスクイメージファイルを使用します。ファイルは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

 `Advance/NanoLabo (ver.2.1) <https://github.com/advancesoftcorp/nanolabo-doc/releases/download/v2.1/install_nanolabo_mac_v2.1.dmg>`_

 `Advance/NanoLabo Tool (ver.2.1) <https://github.com/advancesoftcorp/nanolabo-doc/releases/download/v2.1/install_nanolabo_tool_mac_v2.1.dmg>`_

.. _installerm:

インストール
=============================

まず、Advance/NanoLaboのdmgファイルを開きます。マウントが終わるとディスクイメージの内容が表示されますので、NanoLaboアイコンをアプリケーションディレクトリへドラッグ＆ドロップしてください。

.. image:: /img/mac_dmg.png
   :width: 350 px
   :align: center

次に、Advance/NanoLabo Toolのdmgファイルを開き、同じようにAdvanceSoftディレクトリをApplication Supportへドラッグ＆ドロップします。

.. image:: /img/mac_dmg_tool.png
   :width: 350 px
   :align: center

このとき、認証を求めるダイアログが表示されますので、「認証」をクリックして名前とパスワードを入力してください。

.. image:: /img/mac_copy.png
   :width: 300 px
   :align: center

.. _launchm:

起動
=============================

アプリケーションディレクトリのNanoLaboアイコンから起動してください。

初回のみ、起動の際に許可が必要となります。以下の手順で起動してください。

#.  :kbd:`control` キーを押しながらNanoLaboを開きます（開くをクリックするまで :kbd:`control` キーを離さないでください）。

    .. image:: /img/mac_open.png
       :width: 300 px
       :align: center

#. 「検証中」のプログレスバーが表示されます。時間がかかる場合がありますので、少しお待ちください。

    .. image:: /img/mac_verify.png
       :width: 400 px
       :align: center

#. 実行の許可を確認するダイアログが表示されますので、「開く」をクリックしてください。

    .. image:: /img/mac_confirm.png
       :width: 300 px
       :align: center

.. _licensem:

ライセンスの設定
=============================

ソフトウェアを起動すると、ライセンス登録を案内する画面が表示されます。

ライセンス登録後、原則5営業日以内にライセンスファイル( :file:`nanolabo.lic` )をお送りします。 :file:`/Library/Application Support/AdvanceSoft/NanoLabo/license` ディレクトリにコピーしてください。

Finderのメニューバーから :menuselection:`移動 --> フォルダへ移動...` をクリックし、上記パスを入力していただくと簡単です。

.. _upgradem:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。ライセンスファイルのみ置き換えてください。

- 新しいバージョンにアップデートされる場合は、インストール時と同じ操作を行い、確認が表示されたら「置き換える」を選択してください。アップデート後、ライセンスファイルを再度 :file:`license` ディレクトリにコピーしてください。

- NanoLaboと同時にNanoLabo Toolが更新されている場合は、そちらもアップデートしてください。最新版のNanoLabo Toolに同梱されている計算エンジンでの使用を想定しています。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _uninstallm:

アンインストール
=============================

アプリケーションディレクトリのNanoLaboを削除してください。

.. note::

   計算エンジンの実行ファイル等は :file:`/Library/Application Support/AdvanceSoft` 以下に保存されていますので、必要に応じて削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは :file:`ホームディレクトリ/.nanolabo` に保存されていますので、必要に応じて削除してください。