.. _mac:

==============================
インストール手順 (macOS)
==============================

.. _preparem:

インストールの準備
==============================

本ソフトウェアのインストールには、ディスクイメージファイルを使用します。ファイルは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

 `Advance/NanoLabo (ver.2.5) <https://www.nanolabo.advancesoft.jp/wp-content/uploads/2022/05/install_nanolabo_mac_v2.5.dmg>`_

 `Advance/NanoLabo Tool (ver.2.5) <https://www.nanolabo.advancesoft.jp/wp-content/uploads/2022/05/install_nanolabo_tool_mac_v2.5.dmg>`_

.. note::

   計算をリモートで実行する場合でも、NanoLabo本体と同じマシンにNanoLabo Toolをインストールしてください。

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

#. :guilabel:`Activate Advance/NanoLabo` ダイアログが表示されたら、rootユーザーのパスワードを :guilabel:`Password of Root` 欄に入力し、 :guilabel:`OK` をクリックしてください。パスワードはこの場でのコマンド実行のみに使われ、保存されることはありません。

   または、手動でターミナルを開いて :guilabel:`Command` 欄に表示されたコマンドを管理者ユーザーで実行する方法もあります。この場合、:guilabel:`OK` をクリックした後にエラーと表示されますが、成功していれば次回以降の起動ではダイアログが表示されなくなります。

    .. image:: /img/mac_activate.png
       :width: 300 px
       :align: center

.. _ocpm:

（任意）Open Catalyst Project汎用力場の設定
=================================================

LAMMPSの計算でOpen Catalyst Projectの汎用力場を使うためには、別途Python環境での設定が必要です。設定方法は\ :doc:`こちら </usage/ocp>`\ を参照してください。

.. _sshm:

（任意）リモート計算の設定
=================================================

NanoLaboからリモートのマシンに計算ジョブを投入する場合、SSH接続の設定が必要です。設定方法は\ :doc:`こちら </usage/sshserver>`\ を参照してください。

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