.. _licensesetupdate:

================================================
ライセンスの設定・更新
================================================

- NanoLaboをインストールしたマシンがインターネットに接続されている場合:

  以下の\ :ref:`licenseonline`\ または\ :ref:`licenseupdateonline`\ を参照してください。

- NanoLaboをインストールしたマシンがインターネットに接続されていない場合: 

  以下の\ :ref:`licenseoffline`\ または\ :ref:`licenseupdateoffline`\ を参照してください。

- 上記の手順でライセンスの設定がうまくいかない場合:

  以下の\ :ref:`licenseacc`\ または\ :ref:`licenseupdateacc`\ を参照してください。 

- フローティングライセンスをご購入の場合は\ :ref:`floating`\ も参照して設定を行ってください。

.. note::

      NanoLaboをインストールしたマシンがインターネットに接続されていない場合、別途インターネットに接続されているマシンが必要です。

.. _licenseset:

ライセンスの設定
==========================================

.. _licenseonline:

ライセンスの設定（オンライン）
------------------------------
ライセンス登録後、noreply\@sentinelcloud.comからEntitlement Certificateをメールでお送りします。Entitlement Certificateに記載されているProduct Keyを用いてライセンスの設定を行います。

#. 初めに、NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択してください。

    .. image:: /img/LicenseInformation.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 初回起動時は旧ライセンス(FlexNet)を使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

    .. image:: /img/AskFlex.png

    .. note::

          Yes（旧ライセンス(FlexNet)を使用）を選択した場合も、後からSentinelライセンスに切り替えることができます。詳細は\ :ref:`switchlicense`\ を確認してください。

#. License Registration Guidance画面が表示されます。

   "Activate your license automatically. (online) [recommended]"を選択して、OKボタンをクリックしてください。

    .. note::

          ライセンス登録がお済みでない場合、ここで :guilabel:`Mail` をクリックすると、デフォルトのメーラーでライセンス発行依頼のメール作成画面を開きます。

    .. image:: /img/LicenseRegistrationGuidanceActivate.png

#. "SUCCESS IN CREATING C2V"ダイアログが表示されたら、記載されているパスを控えたうえでOKボタンをクリックしてください。

    .. note::

          C2Vファイルの作成に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、C2Vファイル(拡張子:c2v)をダウンロードしてください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccc2v`\ 以降の手順に従って設定を行ってください。

#. "Activate Sentinel License"ダイアログが表示されたら、Entitlement Certificateに記載されているProduct Keyをテキストフィールドに入力してください。

    .. note::

          このあと、cURLコマンドを用いてV2CPファイルの生成が行われます。プロキシの設定またはcURLコマンドのオプションの設定が必要な場合は、対応する設定ボタン |gearicon| をクリックし、表示されるダイアログで設定を行ってください。

    .. image:: /img/ActivateLicense.png

#. "SUCCESS IN CREATING V2CP"ダイアログが表示されたら、OKボタンをクリックしてください。

    .. note::

          V2CPファイルの作成に失敗した場合は、ダイアログのリンクからEntitlement Management System (EMS)を開き、V2CPファイルをダウンロードしてください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccv2cp`\  以降の手順に従ってライセンスの設定を行ってください。EMSでは、先ほど控えたパスに生成されているnanolabo.c2vを使用してください。

#. 自動でV2CPファイルがマシンに適用され、"SUCCESS IN APPLYING V2CP"ダイアログが表示されたら、OKボタンをクリックしてください。

    .. note::

          V2CPファイルの適用に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、V2CPファイルを適用してください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccv2cpapply` \  以降の手順に従ってライセンスの設定を行ってください。ACCでは、先ほど控えたパスに生成されているnanolabo.v2cpを使用してください。

#. V2CPファイルの適用に成功すると、NanoLaboの再起動を促すダイアログが表示されますので、Yesボタンをクリックしてください。

    .. image:: /img/Restart.png

#. NanoLaboを再起動後、左上のメニューから、再度 :menuselection:`License --> Authentication` を選択すると、"Select a Sentinel License Key"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

    .. image:: /img/SelectLicenseDialog.png

    .. note::

         NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 以上でライセンスの設定は完了です。"SUCCESS IN LICENSING"ダイアログが表示されている場合は、OKボタンをクリックしてダイアログを閉じてください。次回以降の起動時には、今回選んだライセンスキーが自動で選択されますので、ライセンスに関する操作は必要ありません。

.. |gearicon| image:: /img/gear.png

.. _licenseoffline:

ライセンスの設定（オフライン）
------------------------------
ライセンス登録後、noreply\@sentinelcloud.comからEntitlement Certificateをメールでお送りします。 Entitlement Certificateに記載されているProduct Keyを用いてライセンスの設定を行います。

.. _licenseofflinec2v:

C2Vファイルの生成
+++++++++++++++++

#. 初めに、NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択してください。

    .. image:: /img/LicenseInformation.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 初回起動時は旧ライセンス(FlexNet)を使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

    .. image:: /img/AskFlex.png

    .. note::

          Yes（旧ライセンス(FlexNet)を使用）を選択した場合も、後からSentinelライセンスに切り替えることができます。詳細は\ :ref:`switchlicense`\ を確認してください。

#. License Registration Guidance画面が表示されます。

   "Create C2V file "nanolabo.c2v" of this machine. (offline)"を選択し、OKボタンをクリックしてください。

    .. image:: /img/LicenseRegistrationGuidanceC2V.png

#. "SUCCESS IN CREATING C2V"ダイアログが表示されたら、記載されているパスを控えたうえで、OKボタンをクリックしてください。

    .. note::

          C2Vファイルの作成に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、C2Vファイル(拡張子:c2v)をダウンロードしてください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccc2v`\ 以降の手順に従ってライセンスの設定を行ってください。

#. 先ほど控えたパスに作成されているnanolabo.c2vファイルを、インターネットに接続しているマシンに移動します。

.. _offlineEMS:

V2CPファイルの生成
+++++++++++++++++++

#. インターネットに接続しているマシンのウェブブラウザから、\ `Entitlement Management System (EMS) <https://advancesoftcorporation.prod.sentinelcloud.com/customer/>`_\ にアクセスします。

#. "Product Key ID"の入力欄に、Entitlement Certificateに記載されている"Product Key"を入力してログインボタンをクリックしてください。

    .. image:: /img/EMSLogin.png

    .. warning::

       Update Licensesボタンは使用しないでください。ライセンスの更新をする際も、Product Keyを入力してログインボタンをクリックしてください。

#. Products画面が開いたら、Activate Offlineボタンをクリックします。

    .. image:: /img/EMSProducts.png

#. Activate Products画面が開いたら、Select Fileボタンをクリックして、nanolabo.c2vを選択し、Complete Activationボタンをクリックします。

    .. image:: /img/EMSActivateProducts.png

#. アクティベーションに成功したら、Download Licenseをクリックして、V2CPファイル(拡張子:.v2cp)をダウンロードします。

    .. image:: /img/EMSActivated.png

    .. note::

        同一のV2CPファイルを圧縮して添付したメールが自動配信されますので、そちらを解凍してご利用いただくことも可能です。

#. ダウンロードしたV2CPファイルを、NanoLaboをインストールしたマシンに移動してください。

V2CPファイルの適用
+++++++++++++++++++

#. NanoLaboを再び起動し、先ほどと同様にして画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` からLicense Registration Guidance画面を開きます。

#. License Registration Guidance画面が表示されたら、"Apply V2CP file "nanolabo.v2cp" for this machine. (offline)"を選択し、OKボタンをクリックしてください。

    .. image:: /img/LicenseRegistrationGuidanceV2C.png

#. "SUCCESS IN APPLYING V2CP"ダイアログが表示されたら、OKボタンをクリックしてください。

    .. note::

          V2CPファイルの適用に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、V2CPファイルを適用してください。詳細は\ :ref:`licenseacc`\ > \ :ref:`licenseaccv2cpapply` \  を参照してください。

#. V2CPファイルの適用に成功すると、NanoLaboの再起動を促すダイアログが表示されますので、Yesボタンをクリックしてください。

    .. image:: /img/Restart.png

.. _offlinekeyselect:

ライセンスキーの選択
+++++++++++++++++++++

#. NanoLaboを再起動後、画面左上のメニュー |mainmenuicon| から、再度 :menuselection:`License --> Authentication` を選択すると、"Select a Sentinel License Key"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

    .. image:: /img/SelectLicenseDialog.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 以上でライセンスの設定は完了です。"SUCCESS IN LICENSING"ダイアログが表示されている場合は、OKボタンをクリックしてダイアログを閉じてください。次回以降の起動時には、今回選んだライセンスキーが自動で選択されますので、ライセンスに関する操作は必要ありません。

.. _licenseacc:

ライセンスの設定（ACCを利用）
-----------------------------

.. note::

      通常の環境では、NanoLaboとEMS（EMSはオフラインの場合のみ）上の操作でライセンスの設定は完了し、Admin Control Center (ACC)へのアクセスは必要ありません。NanoLaboからのライセンスの設定が失敗する場合のみ、このセクションをご確認ください。

ライセンス登録後、noreply\@sentinelcloud.comからEntitlement Certificateをメールでお送りします。 Entitlement Certificateに記載されているProduct Keyを用いてライセンスの設定を行います。

.. _licenseaccc2v:

C2Vファイルの生成
+++++++++++++++++

#. まず、NanoLaboをインストールしているマシンから\ `Admin Control Center (ACC) <http://localhost:1947>`_\ にアクセスしてください。ウェブブラウザのアドレス欄に http://localhost:1947 と入力することでもACCにアクセスできます。また、ACCはオフラインのマシンからもアクセス可能です。

    .. note::

          NanoLaboの画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Sentinel Settings --> Admin Control Center` を選択することでも、ACCにアクセスできます。ただし、新規インストール時や、設定済みのライセンスの期限が切れているなどの場合は、起動後すぐにライセンスエラーで使用できなくなりますので、URLの直接入力をおすすめします。

#. ACCのSentinel Keys画面のリストのうち、Vendorの欄に32462と記載されている行の、Fingerprintボタンをクリックして、C2Vファイル（fingerprint_32462.c2v）をダウンロードします。

    .. note::

          ライセンスを更新する場合は、更新を適用するライセンスキーのC2Vボタンをクリックして、C2Vファイル（(KeyID)_(timestamp).c2v）をダウンロードしてください。

    .. image:: /img/ACCSentinelKeys.png

.. _licenseaccv2cp:

V2CPファイルの生成
+++++++++++++++++++

#. 次に、ウェブブラウザで\ `EMS <https://advancesoftcorporation.prod.sentinelcloud.com/customer/>`_\ にアクセスします。

    .. note::

          NanoLaboをインストールしたマシンがオフラインの場合は、ダウンロードしたC2Vファイルをオンラインの別のマシンに移動したうえで\ `EMS <https://advancesoftcorporation.prod.sentinelcloud.com/customer/>`_\ にアクセスしてください。


#. "Product Key ID"の入力欄に、Entitlement Certificateに記載されている"Product Key"を入力してログインボタンをクリックしてください。

    .. image:: /img/EMSLogin.png

    .. warning::

       Update Licensesボタンは使用しないでください。ライセンスの更新をする際も、Product Keyを入力してログインボタンをクリックしてください。

#. Products画面が開いたら、Activate Offlineボタンをクリックします。

    .. image:: /img/EMSProducts.png

#. Activate Products画面が開いたら、Select Fileボタンをクリックして、先ほどダウンロードしたC2Vファイルを選択し、Complete Activationボタンをクリックします。

    .. image:: /img/EMSActivateProductsFingerprint.png

#. アクティベーションに成功したら、Download Licenseをクリックして、V2CPファイル(拡張子:.v2cp)をダウンロードします。

    .. image:: /img/EMSActivatedFingerprint.png

    .. note::

        同一のV2CPファイルを圧縮して添付したメールが自動配信されますので、そちらを解凍してご利用いただくことも可能です。

    .. note::

        NanoLaboをインストールしたマシンがオフラインの場合は、ダウンロードしたV2CPファイルをオフラインのマシンに移動してください。

.. _licenseaccv2cpapply:

V2CPファイルの適用
+++++++++++++++++++

#. ACCの画面に戻り、左側のメニューからUpdate/Attach画面を開きます。Select Fileボタンから、ダウンロードしたV2CPファイルを選択し、Apply Fileボタンをクリックしてください。

    .. image:: /img/ACCApply.png

#. V2CPファイルのApplyに成功したら、NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択してください。

    .. image:: /img/LicenseInformation.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 初回起動時は旧ライセンス(FlexNet)を使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

    .. image:: /img/AskFlex.png

    .. note::

          Yes（旧ライセンス(FlexNet)を使用）を選択した場合も、後からSentinelライセンスに切り替えることができます。詳細は\ :ref:`switchlicense`\ を確認してください。

#. "Select a Sentinel License Key"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

    .. image:: /img/SelectLicenseDialog.png

#. 以上でライセンスの設定は完了です。"SUCCESS IN LICENSING"ダイアログが表示されている場合は、OKボタンをクリックしてダイアログを閉じてください。次回以降の起動時には、今回選んだライセンスキーが自動で選択されますので、ライセンスに関する操作は必要ありません。

.. |mainmenuicon| image:: /img/mainmenuicon.png
      :scale: 75

.. _licenseupdate:

ライセンスの更新
===================================
`support.nano@advancesoft.jp <mailto:support.nano@advancesoft.jp>`_ :sup:`*` にライセンスの更新をリクエストしてください。

.. role:: smallnote
   :class: small-note

:smallnote:`* このメールアドレスへの特定電子メール（広告・宣伝メール）の送信を拒否いたします。`

ライセンス登録後、noreply\@sentinelcloud.comから新しいEntitlement Certificateをメールでお送りしますので、記載されているProduct Keyを用いてライセンスの更新を行ってください。

基本的な操作手順は、\ :ref:`licenseset`\ と同様です。ただし、以下の各セクションの注意点に留意して更新を行ってください。

.. _licenseupdateonline:

ライセンスの更新(オンライン)
-----------------------------

.. warning::
      
      必ず更新を適用したいライセンスキーを選択した状態で、更新作業を行ってください。ライセンスキーの確認・変更方法については\ :ref:`licenseinfo`\  及び \ :ref:`changelicense`\ を参照してください。ライセンスキーが一つしかない場合は、特に対応の必要はありません。

- ライセンスの種類やバージョン等に関するダイアログが自動で表示される場合は、YesまたはCloseをクリックしてLicense Registration Guidanceを開いて下さい。 

- 最新バージョンの有効なSentinelライセンスに対して、ライセンス条件やエディションの更新（同時実行数の追加やPro版へのアップグレード等）を適用する場合は、NanoLaboを起動後、画面左上のメニューの :menuselection:`License --> Sentinel Settings --> Activate Automatically` を選択してください。

- NanoLaboの再起動後のキーの選択は必要ありません。

.. _licenseupdateoffline:

ライセンスの更新(オフライン)
-----------------------------

.. warning::
      
      必ず更新を適用したいライセンスキーを選択した状態で、更新作業を行ってください。ライセンスキーの確認・変更方法については\ :ref:`licenseinfo`\  及び \ :ref:`changelicense`\ を参照してください。ライセンスキーが一つしかない場合は、特に対応の必要はありません。

.. warning::
      
      C2VファイルおよびV2CPファイルは必ず新たに生成したものを使用してください。過去の設定・更新時に生成したものを誤って使用しないようにご注意ください。

- ライセンスの種類やバージョン等に関するダイアログが自動で表示される場合は、YesまたはCloseをクリックしてLicense Registration Guidanceを開いて下さい。 

- 最新バージョンの有効なSentinelライセンスに対して、ライセンス条件やエディションの更新（同時実行数の追加やPro版へのアップグレード等）を適用する場合は、LIcense Registration Guidanceは表示されません。代わりに以下の操作を行ってください。

    - C2Vファイルを作成するには、画面左上のメニューの :menuselection:`License --> Sentinel Settings --> Create C2V file` \ を選択してください。

    - V2CPファイルを適用するには、画面左上のメニューの :menuselection:`License --> Sentinel Settings --> Apply V2CP file` \ を選択してください。

- NanoLaboの再起動後のライセンスキーの選択は必要ありません。

.. _licenseupdateacc:
  
ライセンスの更新(ACCを利用)
-----------------------------

.. note::

      通常の環境では、NanoLaboとEMS（EMSはオフラインの場合のみ）上の操作でライセンスの更新は完了し、ACCへのアクセスは必要ありません。NanoLaboからのライセンスの更新が失敗する場合のみ、ACCをご利用ください。

.. warning::
      
      C2VファイルおよびV2CPファイルは必ず新たに生成したものを使用してください。過去の設定・更新時に生成したものを誤って使用しないようにご注意ください。

- ACCのSentinel Keys画面では、更新を適用するライセンスキーのC2Vボタンをクリックして、C2Vファイル（(KeyID)_(timestamp).c2v）をダウンロードします。

- EMSでは、fingerprint_32462.c2vではなく、必ず、手前の手順でダウンロードしたC2Vファイル((KeyID)_(timestamp).c2v)を使用してください。

- NanoLaboの再起動後のライセンスキーの選択は必要に応じて行ってください。

.. _floating:

フローティングライセンスの設定
===================================

フローティングライセンスをご購入いただいた場合は、ライセンスの設定を行ったマシンと同一のネットワーク上にある別のマシン（Windows・Linux・macOS）でもNanoLaboを使うことができます。

- ライセンスサーバーとして使うマシン側

 NanoLaboをインストールして、ライセンスの設定を行ってください。マシンの起動時に毎回自動でライセンスマネージャが起動するため、一度ライセンスの設定を行って以降は特に必要な操作はありません。

- NanoLaboを使うクライアントマシン側

 NanoLaboをインストールして起動し、"Select a Sentinel License Key"ダイアログで使用するライセンスキーを選択してください。一度選択したライセンスキーはデフォルトのキーとして登録されるため、それ以降の起動時に必要な操作はありません。

.. note::

      クライアントマシンからライセンスサーバーのライセンスを検出できない場合は、以下の対応が必要です。

      - クライアントマシンにライセンスサーバーのIPアドレスを設定します。クライアントマシンから\ `Admin Control Center (ACC) <http://localhost:1947>`_\ にアクセスし、画面左側のメニューのConfigurationを選択してください。次に、Access to Remote License Managersタブを開いて、Remote License Search ParametersにライセンスサーバーのIPアドレスを入力し、Submitをクリックしてください。

      - ライセンスサーバーのファイアウォールの設定で、TCP/UDP ポート 1947が開放されていない場合は、設定を変更して開放してください。（Windowsマシンの場合、インストール時に自動でこれらのポートは開放されるため、通常ではファイアウォールの設定は必要ありません。）

.. _licenseinfo:

ライセンスキーの確認方法
===================================

画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択すると、現在選択されているキーのIDなどの情報を確認できます。

より詳細な情報は\ `ACC <http://localhost:1947>`_\ でもご確認いただけます。

選択されているキーが期限切れなどで有効でない場合、ライセンスエラーを示すダイアログに選択されているキーのIDが表示されます。

.. _changelicense:

ライセンスキーの変更方法
===================================

複数のライセンスキーをご購入いただいている場合には、それらの内のどれか一つにログインして、NanoLaboをご利用いただくことになります。ログインするライセンスキーを変更する場合は、以下の手順に従って下さい。

画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Sentinel Settings --> Change License Key` を選択すると、"Select a Sentinel License Key"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

.. note::
      
      デフォルトで選択されているキーが期限切れなどで有効でない場合、ライセンスエラーを示すダイアログのSelect Keyボタンをクリックすると、"Select a Sentinel License Key"ダイアログが表示されます。

.. note::
      
      リストのloginsは、そのライセンスキーの機能に対して、現在いくつのログインがあるかを表しています。また、リストのconcurrencyは、そのライセンスキーの機能に同時にログインできる数の上限を表しています。

NanoLaboの再起動を促すダイアログが表示された場合は、YesボタンをクリックしてNanoLaboを再起動してください。

変更後のキーは、デフォルトのキーとして登録されるため、次回以降の起動時に選択し直す必要はありません。
