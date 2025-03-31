.. _mac:

==============================
インストール手順 (macOS)
==============================

.. _preparem:

インストールの準備
==============================

本ソフトウェアのインストールには、ディスクイメージファイルを使用します。ファイルは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

- Intel版：従来のマシンではこちらの2つをダウンロードしてください。

 `Advance/NanoLabo (ver.3.0) Intel版 <https://www.apps.advancesoft.jp/nanolabo/install_nanolabo_mac_v3.0-Intel.dmg>`_

 `Advance/NanoLabo Tool (ver.3.0) Intel版 <https://www.apps.advancesoft.jp/nanolabo/install_nanolabo_tool_mac_v3.0-Intel.dmg>`_

- ARM版：Apple M1搭載マシンではこちらの2つをダウンロードしてください。

 `Advance/NanoLabo (ver.3.0) ARM版 <https://www.apps.advancesoft.jp/nanolabo/install_nanolabo_mac_v3.0-ARM.dmg>`_

 `Advance/NanoLabo Tool (ver.3.0) ARM版 <https://www.apps.advancesoft.jp/nanolabo/install_nanolabo_tool_mac_v3.0-ARM.dmg>`_

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


.. Macでは、インストール時に/etc/hasplm/にhasplm.iniファイルを作成しない予定

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

#. :guilabel:`Activate Advance/NanoLabo` ダイアログが表示されたら、（管理者ユーザーでログインしている場合）ユーザーアカウントのパスワードを :guilabel:`Password of Root` 欄に入力し、 :guilabel:`OK` をクリックしてください。パスワードはこの場でのコマンド実行のみに使われ、保存されることはありません。

   または、手動でターミナルを開いて :guilabel:`Command` 欄に表示されたコマンドを管理者ユーザーで実行する方法もあります。rootユーザー以外の場合は ``sudo`` を付けて実行してください。この場合、:guilabel:`OK` をクリックした後にエラーと表示されますが、成功していれば次回以降の起動ではダイアログが表示されなくなります。

    .. image:: /img/mac_activate.png
       :width: 300 px
       :align: center

.. _licensem:

ライセンスの設定
=============================

NanoLaboをインストールしたマシンがインターネットに接続されている場合は以下の\ :ref:`licenseonlinem`\ を、インターネットに接続されていない場合は\ :ref:`licenseoffline`\ を参照してください。

.. _licenseonlinem:

ライセンスの設定（オンライン）
------------------------------

ライセンス登録後、noreply\@sentinelcloud.comからEntitlement Certificateをメールでお送りします。Entitlement Certificateに記載されているProduct Key (PKID)を用いてライセンスの設定を行います。

初めに、NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の \ :menuselection:`License --> License Information` \ を選択してください。

.. image:: /img/LicenseInformation.png

.. note::
      
      NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

初回起動時は旧ライセンス(FlexNet)を使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

.. image:: /img/AskFlex.png

.. note::

      Yes（旧ライセンス(FlexNet)を使用）を選択した場合も、後からSentinelライセンスに切り替えることができます。詳細は\ :ref:`switchlicense`\ を確認してください

その後に表示されるライセンスエラーダイアログのOKボタンをクリックすると、License Registration Guidance画面が表示されます。

"Activate and apply your license automatically. (online) (recommended)"のチェックボックスにチェックを入れ、OKボタンをクリックしてください。

.. image:: /img/LicenseRegistrationGuidanceActivate.png

.. _licenseonlinec2vm:

"SUCCESS IN CREATING C2V"ダイアログが表示されたら、記載されているパスを控えたうえでOKボタンをクリックしてください。

.. note::
      
      C2Vファイルの作成に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、C2Vファイル(拡張子:c2v)をダウンロードしてください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccc2v`\ 以降の手順に従って設定を行ってください。

"Activate License"ダイアログが表示されたら、Entitlement Certificateに記載されているProduct Key (PKID)をテキストフィールドに入力してください。

.. note::
      このあと、cURLコマンドを用いてV2CPファイルの生成が行われます。プロキシの設定またはcURLコマンドのオプションの設定が必要な場合は、対応するチェックボックスにチェックを入れたうえでOKボタンをクリックし、続いて表示されるダイアログで各種設定を行ってください。

.. image:: /img/ActivateLicense.png

"SUCCESS IN CREATING V2CP"ダイアログが表示されたら、OKボタンをクリックしてください。

.. note::
      
      V2CPファイルの作成に失敗した場合は、ダイアログのリンクからEntitlement Management System (EMS)を開き、V2CPファイルをダウンロードしてください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccv2cp`\  以降の手順に従ってライセンスの設定を行ってください。EMSでは、先ほど控えたパスに生成されているnanolabo.c2vを使用してください。

自動でV2CPファイルがマシンに適用され、"SUCCESS IN APPLYING V2CP"ダイアログが表示されたら、OKボタンをクリックしてください。

.. note::
      
      V2CPファイルの適用に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、V2CPファイルを適用してください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccv2cpapply` \  以降の手順に従ってライセンスの設定を行ってください。ACCでは、先ほど控えたパスに生成されているnanolabo.v2cpを使用してください。

V2CPファイルの適用に成功すると、NanoLaboの再起動を促すダイアログが表示されますので、Yesボタンをクリックしてください。

.. image:: /img/Restart.png

.. _onlinekeyselectm:

NanoLaboを再起動後、左上のメニューから、再度 \ :menuselection:`License --> License Information` \ を選択すると、"Select a license to login"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

.. image:: /img/SelectLicenseDialog.png

.. note::
      
     NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

"SUCCESS IN LICENSING"ダイアログが表示されたら、ライセンスの設定は完了です。OKボタンをクリックしてダイアログを閉じてください。次回以降の起動時には、今回選んだライセンスキーが自動で選択されますので、ライセンスに関する操作は必要ありません。

.. _floatingm:

フローティングライセンス
-----------------------------

フローティングライセンスをご購入いただいた場合は、ライセンスの設定を行ったマシンと同一のネットワーク上にある別のマシン（Windows・Linux・macOS）でもNanoLaboを使うことができます。

- ライセンスサーバーとして使うマシン側

 NanoLaboをインストールして、ライセンスの設定を行ってください。マシンの起動時に毎回自動でライセンスマネージャが起動するため、一度ライセンスの設定を行って以降は特に必要な操作はありません。

- NanoLaboを使うクライアントマシン側

 NanoLaboをインストールして起動し、"Select a license to login"ダイアログで使用するライセンスキーを選択してください。一度選択したライセンスキーはデフォルトのキーとして登録されるため、それ以降の起動時に必要な操作はありません。

.. note::
      
      クライアントマシンからライセンスサーバーのライセンスを検出できない場合は、以下の対応が必要です。
      
      - クライアントマシンにライセンスサーバーのIPアドレスを設定します。クライアントマシンから\ `Admin Control Center (ACC) <http://localhost:1947>`_\ にアクセスし、画面左側のメニューのConfigurationを選択してください。次に、Access to Remote License Managersタブを開いて、Remote License Search ParametersにライセンスサーバーのIPアドレスを入力し、Submitをクリックしてください。
        
      - ライセンスサーバーのファイアウォールの設定で、TCP/UDP ポート 1947が開放されていない場合は、設定を変更して開放してください。

.. NanoLaboをインストールしているということはGUIマシンであり、ACCを利用可能なため、hasplm.iniを作成する必要はない。一方、インストーラでhasplm.iniを自動生成する機能は便利なのであってよい。

.. _licenseinfom:

ライセンスキーの確認方法
----------------------------

画面左上のメニュー |mainmenuicon| の \ :menuselection:`License --> License Information` \ を選択すると、現在選択されているキーのIDなどの情報を確認できます。

.. より詳細な情報はACCでもご確認いただけます。

選択されているキーが期限切れなどで有効でない場合、ライセンスエラーを示すダイアログに選択されているキーのIDが表示されます。

.. _changelicensem:

ライセンスキーの変更方法
------------------------

複数のライセンスキーをご購入いただいている場合には、それらの内のどれか一つにログインして、NanoLaboをご利用いただくことになります。ログインするライセンスキーを変更する場合は、以下の手順に従って下さい。

画面左上のメニュー |mainmenuicon| の \ :menuselection:`License --> Change License Key` \ を選択すると、"Select a license to login"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

.. note::
      
      デフォルトで選択されているキーが期限切れなどで有効でない場合、ライセンスエラーを示すダイアログのSelect Keyボタンをクリックすると、"Select a license to login"ダイアログが表示されます。

.. note::
      
      リストのcurrent loginは、そのライセンスキーの機能に対して、現在いくつのログインがあるかを表しています。また、リストのconcurrencyは、そのライセンスキーの機能に同時にログインできる数の上限を表しています。

NanoLaboの再起動を促すダイアログが表示された場合は、YesボタンをクリックしてNanoLaboを再起動してください。

変更後のキーは、デフォルトのキーとして登録されるため、次回以降の起動時に選択し直す必要はありません。

.. |mainmenuicon| image:: /img/mainmenuicon.png
      :scale: 75

.. _ocpm:

（任意）グラフニューラルネットワーク汎用力場の設定
====================================================

LAMMPSの計算でグラフニューラルネットワーク汎用力場を使うためには、別途Python環境での設定が必要です。設定方法は\ :doc:`Open Catalyst Projectの設定 </usage/ocp>`\ 、\ :doc:`M3GNetの設定 </usage/m3gnet>`\ 、\ :doc:`CHGNetの設定 </usage/chgnet>`\ をそれぞれ参照してください。

.. _tb3m:

（任意）汎用タイトバインディング法(ThreeBodyTB)の設定
========================================================

汎用タイトバインディング法(ThreeBodyTB)の計算を行うためには、別途Julia環境での設定が必要です。設定方法は\ :doc:`こちら </usage/inputeditortb3>`\ を参照してください。

.. _sshm:

（任意）リモート計算の設定
=================================================

NanoLaboからリモートのマシンに計算ジョブを投入する場合、SSH接続の設定が必要です。設定方法は\ :doc:`こちら </usage/sshserver>`\ を参照してください。

.. _upgradem:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。以下の\ :ref:`licenseupdatem`\ を参考にしてライセンスのみを更新してください。

- 新しいバージョンにアップデートされる場合は、インストール時と同じ操作を行い、確認が表示されたら「置き換える」を選択してください。

- メジャーバージョンが新しいNanoLaboにアップデートする場合は、ライセンスの更新が必要です。以下の\ :ref:`licenseupdatem`\ を参考にしてライセンスを更新してください。

- NanoLaboと同時にNanoLabo Toolが更新されている場合は、そちらもアップデートしてください。最新版のNanoLabo Toolに同梱されている計算エンジンでの使用を想定しています。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _licenseupdatem:

ライセンスの更新
----------------------------
support.nano\@advancesoft.jpにライセンスの更新をリクエストしてください。

ライセンス登録後、noreply\@sentinelcloud.comから新しいEntitlement Certificateをメールでお送りしますので、記載されているProduct Key (PKID)を用いてライセンスの更新を行ってください。


NanoLaboをインストールしたマシンがインターネットに接続されている場合は以下の\ :ref:`licenseupdateonlinem`\ を、インターネットに接続されていない場合は\ :ref:`licenseupdateoffline`\ を参照してください。

.. _licenseupdateonlinem:

ライセンスの更新(オンライン)
+++++++++++++++++++++++++++++++

基本的な操作手順は、\ :ref:`licenseonlinem`\ と同様です。ただし、以下の注意点に留意して更新を行ってください。

.. warning::
      
      必ず更新を適用したいライセンスキーを選択した状態で、更新作業を行ってください。ライセンスキーの確認・変更方法については\ :ref:`licenseinfom`\  及び \ :ref:`changelicensem`\ を参照してください。ライセンスキーが一つしかない場合は、特に対応の必要はありません。

.. warning      
.. ライセンスキーの更新ではなく、ライセンスキーの追加を行う場合は、...の手順に従ってください。

- ライセンスの種類やバージョン等に関する警告が表示される場合は、YesをクリックしてLicense Registration Guidanceを開いて下さい。 

- 最新バージョンの有効なSentinelライセンスに対して、ライセンス条件やエディションの更新（同時実行数の追加やPro版へのアップグレード等）を適用する場合は、NanoLaboを起動後、画面左上のメニューの \ :menuselection:`License --> Activate License Automatically` \ を選択してください。

- NanoLaboの再起動後のキーの選択は必要ありません。

.. _uninstallm:

アンインストール
=============================

アプリケーションディレクトリのNanoLaboを削除してください。

.. note::

   計算エンジンの実行ファイル等は :file:`/Library/Application Support/AdvanceSoft` 以下に保存されていますので、必要に応じて削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは :file:`ホームディレクトリ/.nanolabo` に保存されていますので、必要に応じて削除してください。