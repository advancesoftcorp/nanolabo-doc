.. _licensesetupdate:

================================================
ライセンスの設定・更新
================================================

- NanoLaboをインストールしたマシンがインターネットに接続されている場合:

  以下の\ :ref:`licenseonline`\ または\ :ref:`licenseupdateonline`\ を参照してください。

  .. image:: /img/license_online.svg
     :height: 200 px

- NanoLaboをインストールしたマシンがインターネットに接続されていない場合: 

  以下の\ :ref:`licenseoffline`\ または\ :ref:`licenseupdateoffline`\ を参照してください。

  .. image:: /img/license_offline.svg
     :height: 220 px

 .. note::

     ライセンスの設定を行うには、別途インターネットに接続されているマシンが必要です。

- 上記の手順でライセンスの設定がうまくいかない場合:

  以下の\ :ref:`licenseacc`\ または\ :ref:`licenseupdateacc`\ を参照してください。 

- フローティングライセンスをご購入の場合は\ :ref:`floating`\ を参照してから上記の手順を実行してください。

  .. image:: /img/license_floating.svg
     :height: 200 px

 .. warning::

     フローティングライセンスをご購入の場合、ライセンスサーバーとクライアントマシンにおけるライセンス設定手順は異なりますのでご注意ください。

.. _licenseset:

ライセンスの設定
==========================================

.. _licenseonline:

ライセンスの設定（オンライン）
------------------------------
ライセンス登録後、noreply\@sentinelcloud.comからEntitlement Certificateをメールでお送りします。Entitlement Certificateに記載されているProduct Keyを用いてライセンスの設定を行います。

#. NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択してください。

    .. image:: /img/LicenseInformation.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 初回起動時は旧ライセンスを使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

    .. image:: /img/AskFlex.png

    .. note::

          Yes（旧ライセンスを使用）を選択した場合は、ダイアログに従ってNanoLaboを再起動してご利用ください。また、ここで選択したライセンス種別は後から変更できます。詳細は\ :ref:`switchlicense`\ を確認してください。

#. ライセンスエラーダイアログのOKボタンをクリックすると、License Registration Guidance画面が表示されます。

   "Activate your license automatically. (online) [recommended]"を選択して、OKボタンをクリックしてください。

    .. note::

          ライセンス登録がお済みでない場合、ここで :guilabel:`Mail` をクリックすると、デフォルトのメーラーでライセンス発行依頼のメール作成画面を開きます。

    .. image:: /img/LicenseRegistrationGuidanceActivate.png


#. "Activate Sentinel License"ダイアログが表示されたら、Entitlement Certificateに記載されているProduct Keyをテキストフィールドに入力してください。

    .. note::

          このあと、cURLコマンドを用いてV2CPファイルの生成が行われます。プロキシの設定またはcURLコマンドのオプションの設定が必要な場合は、対応する設定ボタン |gearicon| をクリックし、表示されるダイアログで設定を行ってください。

    .. image:: /img/ActivateLicense.png

#. "Sentinel License has been activated, successfully."というメッセージダイアログのOKボタンをクリックすると、NanoLaboの再起動を促すダイアログが表示されますので、Yesボタンをクリックしてください。

    .. image:: /img/Restart.png

    .. note::

          C2Vファイルの作成、V2CPファイルの作成またはV2CPファイルの適用に失敗したことを示すダイアログが表示された場合は、\ :ref:`licenseacc`\ の\ :ref:`licenseaccc2v`\ 以降の手順に従って設定を行ってください。いずれの内容でダイアログが表示された場合でも、\ :ref:`licenseaccc2v`\ の手順から再度始めてください。

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

#. NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択してください。

    .. image:: /img/LicenseInformation.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 初回起動時は旧ライセンスを使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

    .. image:: /img/AskFlex.png

    .. note::

          Yes（旧ライセンスを使用）を選択した場合は、ダイアログに従ってNanoLaboを再起動してご利用ください。また、ここで選択したライセンス種別は後から変更できます。詳細は\ :ref:`switchlicense`\ を確認してください。

#. ライセンスエラーダイアログのOKボタンをクリックすると、License Registration Guidance画面が表示されます。

   "Create C2V file "nanolabo.c2v" of this machine. (offline)"を選択し、OKボタンをクリックしてください。

    .. image:: /img/LicenseRegistrationGuidanceC2V.png

#. "C2V file has been created, successfully."というメッセージダイアログのOKボタンをクリックすると、ファイルブラウザが起動されます。表示されている :file:`nanolabo.c2v` ファイルを、インターネットに接続しているマシンに移動してください。

    .. note::

       C2Vファイルの作成に失敗したことを示すダイアログが表示された場合は、メッセージ中のリンクからAdmin Control Center (ACC)を開き、C2Vファイル（拡張子:c2v）をダウンロードしてください。詳細は\ :ref:`licenseacc`\ を参照し、 \ :ref:`licenseaccc2v`\ 以降の手順に従ってライセンスの設定を行ってください。

.. _offlineEMS:

V2CPファイルの生成
+++++++++++++++++++

#. インターネットに接続しているマシンのウェブブラウザから、\ `Entitlement Management System (EMS) <https://advancesoftcorporation.prod.sentinelcloud.com/customer/>`_\ にアクセスします。

#. "Product Key ID"の入力欄に、Entitlement Certificateに記載されている"Product Key"を入力してログインボタンをクリックしてください。

    .. image:: /img/EMSLogin.png

#. Products画面が開いたら、Activate Offlineボタンをクリックします。

    .. image:: /img/EMSProducts.png

#. Activate Products画面が開いたら、Select Fileボタンをクリックして、 :file:`nanolabo.c2v` を選択し、Complete Activationボタンをクリックします。

    .. warning::

        ライセンスを更新する場合は、必ず、新たに生成したC2Vファイルを使用してください。過去の設定・更新時に生成したものを誤って使用しないようにご注意ください。

    .. image:: /img/EMSActivateProducts.png

#. アクティベーションに成功したら、Download Licenseをクリックして、V2CPファイル（拡張子:.v2cp）をダウンロードします。

    .. image:: /img/EMSActivated.png

    .. note::

        同一のV2CPファイルを圧縮して添付したメールが自動配信されますので、そちらを解凍してご利用いただくことも可能です。

#. ダウンロードしたV2CPファイルを、NanoLaboをインストールしたマシンに移動してください。

V2CPファイルの適用
+++++++++++++++++++

#. NanoLaboを再び起動し、先ほどと同様にして画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` からLicense Registration Guidance画面を開きます。

#. License Registration Guidance画面が表示されたら、"Apply V2CP file "nanolabo.v2cp" for this machine. (offline)"を選択し、OKボタンをクリックしてください。

    .. image:: /img/LicenseRegistrationGuidanceV2C.png

    .. note::

        ダウンロードしたV2CPファイルが :file:`nanolabo.v2cp` という名前でない場合もこちらの選択肢で問題ありません。

#. ファイルブラウザが表示されたら、手前の手順でダウンロードしたV2CPファイルを選択します。

#. "V2CP file has been applied, successfully."ダイアログが表示されたら、OKボタンをクリックしてください。NanoLaboの再起動を促すダイアログが表示されますので、Yesボタンをクリックしてください。

    .. image:: /img/Restart.png

    .. note::

          V2CPファイルの適用に失敗した場合は、ダイアログのリンクからAdmin Control Center (ACC)を開き、V2CPファイルを適用してください。詳細は\ :ref:`licenseacc` |rarr| :ref:`licenseaccv2cpapply` \  を参照してください。

.. |rarr| raw:: html

   &rarr;

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

      通常の環境では、NanoLaboとEMS（EMSはオフラインの場合のみ）上の操作でライセンスの設定は完了し、Admin Control Center (ACC)へのアクセスは必要ありません。NanoLaboからのライセンス設定ができない場合のみ、このセクションをご確認ください。

ライセンス登録後、noreply\@sentinelcloud.comからEntitlement Certificateをメールでお送りします。 Entitlement Certificateに記載されているProduct Keyを用いてライセンスの設定を行います。

.. _licenseaccc2v:

C2Vファイルの生成
+++++++++++++++++

#. NanoLaboをインストールしているマシンのウェブブラウザで、Admin Control Center (ACC) (http://localhost:1947) にアクセスしてください。ACCはオフラインのマシンからもアクセス可能です。

    .. note::

          フローティングライセンスをご利用の場合は、ライセンスサーバーのウェブブラウザでACC (http://localhost:1947) にアクセスしてください。

          ウェブブラウザが使用できない場合は、\ :ref:`floating`\ を参照して、ウェブブラウザを使用可能な別のマシンからライセンスサーバーのACCにアクセスしてください。

#. ACCのSentinel Keys画面のリストのうち、Vendorの欄に32462と記載されている行の、Fingerprintボタンをクリックして、C2Vファイル :file:`fingerprint_32462.c2v` をダウンロードします。

    .. note::

          弊社の他の製品のキーがマシンに対して登録されている場合、Vendorの欄に32462と記載されている行にFingerprintボタンは表示されません。この場合は、弊社の他の製品のキーに表示されているC2Vボタンをクリックして、C2Vファイル :file:`(KeyID)_(timestamp).c2v` をダウンロードしてください。

    .. warning::

          ライセンスを更新する場合は、必ず、更新を適用するライセンスキーに表示されているC2Vボタンをクリックして、C2Vファイル :file:`(KeyID)_(timestamp).c2v` をダウンロードしてください。

    .. image:: /img/ACCSentinelKeys.png

.. _licenseaccv2cp:

V2CPファイルの生成
+++++++++++++++++++

#. 次に、ウェブブラウザで\ `EMS <https://advancesoftcorporation.prod.sentinelcloud.com/customer/>`_\ にアクセスします。

    .. note::

          C2Vファイルをダウンロードしたマシンがオフラインの場合は、C2Vファイルをオンラインの別のマシンに移動したうえで\ `EMS <https://advancesoftcorporation.prod.sentinelcloud.com/customer/>`_\ にアクセスしてください。

#. "Product Key ID"の入力欄に、Entitlement Certificateに記載されている"Product Key"を入力してログインボタンをクリックしてください。

    .. image:: /img/EMSLogin.png

#. Products画面が開いたら、Activate Offlineボタンをクリックします。

    .. image:: /img/EMSProducts.png

#. Activate Products画面が開いたら、Select Fileボタンをクリックして、先ほどダウンロードしたC2Vファイルを選択し、Complete Activationボタンをクリックします。

    .. warning::

        ライセンスを更新する場合は、 :file:`fingerprint_32462.c2v` ではなく、必ず、手前の手順でダウンロードしたC2Vファイル :file:`(KeyID)_(timestamp).c2v` を使用してください。

    .. image:: /img/EMSActivateProductsFingerprint.png

#. アクティベーションに成功したら、Download Licenseをクリックして、V2CPファイル（拡張子:.v2cp）をダウンロードします。

    .. image:: /img/EMSActivatedFingerprint.png

    .. note::

        同一のV2CPファイルを圧縮して添付したメールが自動配信されますので、そちらを解凍してご利用いただくことも可能です。

#. ダウンロードしたV2CPファイルは、ノードロックライセンスでNanoLaboを使用するマシンまたはフローティングライセンスでライセンスサーバーとして使用するマシンの任意のディレクトリに格納してください。

.. _licenseaccv2cpapply:

V2CPファイルの適用
+++++++++++++++++++

#. ACCの画面に戻り、左側のメニューからUpdate/Attach画面を開きます。Select Fileボタンから、ダウンロードしたV2CPファイルを選択し、Apply Fileボタンをクリックしてください。

    .. image:: /img/ACCApply.png

#. "Your update was applied successfully."と表示されれば、ライセンスキーが有効となります。

ライセンスキーの選択
+++++++++++++++++++++

#. NanoLaboを起動し、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択してください。

    .. image:: /img/LicenseInformation.png

    .. note::

          NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

#. 初回起動時は旧ライセンスを使用するかを訊ねるダイアログが表示されますので、Noを選択してください。

    .. image:: /img/AskFlex.png

    .. note::

          Yes（旧ライセンスを使用）を選択した場合は、ダイアログに従ってNanoLaboを再起動してご利用ください。また、ここで選択したライセンス種別は後から変更できます。詳細は\ :ref:`switchlicense`\ を確認してください。

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

ライセンスの更新（オンライン）
--------------------------------

.. warning::
      
      必ず更新を適用したいライセンスキーを選択した状態で、更新作業を行ってください。ライセンスキーの確認・変更方法については\ :ref:`licenseinfo`\  及び \ :ref:`changelicense`\ を参照してください。ライセンスキーが一つしかない場合は、特に対応の必要はありません。

- ライセンスの種類やバージョン等に関するダイアログが自動で表示される場合は、YesまたはCloseをクリックしてLicense Registration Guidanceを開いて下さい。 

- 最新バージョンの有効なSentinelライセンスに対して、ライセンス条件やエディションの更新（同時実行数の追加やPro版へのアップグレード等）を適用する場合は、License Registration Guidanceは表示されません。代わりに、NanoLaboを起動後、画面左上のメニューの :menuselection:`License --> Sentinel Settings --> Activate Automatically` を選択してください。

- NanoLaboの再起動後のキーの選択は必要ありません。

.. _licenseupdateoffline:

ライセンスの更新（オフライン）
--------------------------------

.. warning::
      
      必ず更新を適用したいライセンスキーを選択した状態で、更新作業を行ってください。ライセンスキーの確認・変更方法については\ :ref:`licenseinfo`\  及び \ :ref:`changelicense`\ を参照してください。ライセンスキーが一つしかない場合は、特に対応の必要はありません。

.. warning::
      
      C2VファイルおよびV2CPファイルは必ず新たに生成したものを使用してください。過去の設定・更新時に生成したものを誤って使用しないようにご注意ください。

- ライセンスの種類やバージョン等に関するダイアログが自動で表示される場合は、YesまたはCloseをクリックしてLicense Registration Guidanceを開いて下さい。 

- 最新バージョンの有効なSentinelライセンスに対して、ライセンス条件やエディションの更新（同時実行数の追加やPro版へのアップグレード等）を適用する場合は、License Registration Guidanceは表示されません。代わりに以下の操作を行ってください。

 - C2Vファイルを作成するには、画面左上のメニューの :menuselection:`License --> Sentinel Settings --> Create C2V file` \ を選択してください。

 - V2CPファイルを適用するには、画面左上のメニューの :menuselection:`License --> Sentinel Settings --> Apply V2CP file` \ を選択してください。

- NanoLaboの再起動後のライセンスキーの選択は必要ありません。

.. _licenseupdateacc:
  
ライセンスの更新（ACCを利用）
--------------------------------

.. note::

      通常の環境では、NanoLaboとEMS（EMSはオフラインの場合のみ）上の操作でライセンスの更新は完了し、ACCへのアクセスは必要ありません。NanoLaboからのライセンス更新ができない場合のみ、ACCをご利用ください。

.. warning::
      
      C2VファイルおよびV2CPファイルは必ず新たに生成したものを使用してください。過去の設定・更新時に生成したものを誤って使用しないようにご注意ください。

.. warning::

      ACCのSentinel Keys画面からC2Vファイルをダウンロードする際は、必ず、更新を適用するキーに表示されているC2Vボタンをクリックしてダウンロードを行ってください。
  
.. note::

      初めてSentinelライセンスの設定を行う場合に必要なC2Vファイルのファイル名は :file:`fingerprint_32462.c2v` ですが、更新の際に必要なC2Vファイルのファイル名は :file:`(KeyID)_(timestamp).c2v` となります。

- NanoLaboの再起動後のライセンスキーの選択は必要に応じて行ってください。

.. _floating:

フローティングライセンスの設定
===================================

フローティングライセンスをご購入いただいた場合は、ライセンスの設定を行ったマシンとネットワーク接続された別のマシン（Windows・Linux・macOS\ :sup:`*`）でもNanoLaboを使うことができます。 `*`:sup: 管理者権限の無いmacOSを除く

- ライセンスサーバーとして使うマシン側

 NanoLaboをインストールして、ライセンスの設定を行ってください。マシンの起動時に毎回自動でライセンスマネージャーが起動するため、一度ライセンスの設定を行って以降は特に必要な操作はありません。

 .. note::
    GUIが使えないマシンをライセンスサーバーとして使う場合、NanoLaboインストーラーは使わず、\ `Sentinel-LDK-RTE（ライセンスマネージャー）をダウンロード <https://apps.advancesoft.jp/sentinel/Sentinel-LDK-RTE-for-AdvanceSoft-v10.13.1_Linux.tar.gz>`_\ ・インストールしてください。

    .. code-block:: console

        tar -xf Sentinel-LDK-RTE-for-AdvanceSoft-v10.13.1_Linux.tar.gz
        cd aksusbd-10.13.1
        sudo ./dinst
        # アンインストール時には、同フォルダのdunstを実行してください。
        sudo ./dunst

    ライセンスの設定を行うには、GUIアプリケーションを使用可能かつネットワーク接続された別のマシンからライセンスサーバーのACCにアクセスする必要があります。
    以下のいずれかの方法で、ACCへのリモートアクセス設定を行ってください。

    - ライセンスサーバーの :file:`/etc/hasplm/hasplm.ini` を管理者権限で編集し、以下の例を参考にして設定を記述してください。

     .. table::

         +-------------------------------------------------------------------------------------------+
         |/etc/hasplm/hasplm.iniの設定例                                                             |
         +===========================================================================================+
         || accremote = 1                                                                            |
         || adminremote = 0                                                                          |
         +-------------------------------------------------------------------------------------------+

     .. warning::

         adminremoteに別の値が既に設定されている場合は、その値を変更する必要はありません。accremoteの値のみを変更してください。

     以上の設定を行うと、別のマシンのウェブブラウザのアドレス欄に http\ ://<ライセンスサーバーのIPアドレス>:1947 と入力することで、ライセンスサーバーのACCにアクセスできます。

     .. note::

         リモートのACCに接続後、GUI画面からパスワードを設定することを推奨します。
         ACCの画面左側のConfigurationを選択し、Basic Settingsタブを開くと、Password Protectionの欄からパスワードの適用範囲とパスワードを設定できます。
         このパスワードは、選択した適用範囲(ACCの設定ページまたは全てのページ)にアクセスする際に必要となります。

    - SSHポートフォワーディングを利用してリモートのACCへアクセスします。詳細については\ `こちらのドキュメント <https://apps.advancesoft.jp/sentinel/doc/index.html>`_\ を参照してください。

    ACCに接続後、\ :ref:`licenseacc`\ に従ってライセンスの設定を行ってください。

 .. note::

     ファイアウォールの設定で、TCP/UDP ポート 1947が開放されていない場合は、設定を変更して開放してください。（Windowsマシンの場合、インストール時に自動でこれらのポートは開放されるため、通常ではファイアウォールの設定は必要ありません。）

- NanoLaboを使うクライアントマシン側

 NanoLaboをインストールして起動し、"Select a Sentinel License Key"ダイアログで使用するライセンスキーを選択してください。一度選択したライセンスキーはデフォルトのキーとして登録されるため、それ以降の起動時に必要な操作はありません。

 .. note::

     ライセンスサーバーと異なるネットワークセグメントに存在するクライアントマシンで、NanoLaboインストール時にライセンスサーバーのIPアドレスまたはホスト名を設定していない場合は、以下の方法で設定を行ってください。

     - クライアントマシンがWindowsまたはLinuxの場合

      以下のディレクトリに :file:`hasp_32462.ini` ファイルを作成（既にある場合は編集）し、以下の例を参考にしてライセンスサーバーのIPアドレスまたはホスト名を記述（既にある場合は行を追加）してください。

      - Windowsの場合 : :file:`%LocalAppData%\\SafeNet Sentinel\\Sentinel LDK\\`

      - Linuxの場合 : :file:`$HOME/.hasplm/`

       .. table::

        +-------------------------------------------------------------------------------------------+
        |IPアドレスが192.168.00.000の場合                                                           |
        +===========================================================================================+
        || serveraddr = 192.168.00.000                                                              |
        +-------------------------------------------------------------------------------------------+

     - クライアントマシンがmacOSの場合

      クライアントマシンのウェブブラウザでAdmin Control Center (ACC) (http://localhost:1947) にアクセスし、画面左側のメニューのConfigurationを選択してください。
      
      次に、Access to Remote License Managersタブを開いて、Remote License Search ParametersにライセンスサーバーのIPアドレスまたはホスト名を入力し、Submitをクリックしてください。


.. _licenseinfo:

ライセンスキーの確認方法
===================================

画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択すると、現在選択されているキーのIDなどの情報を確認できます。

より詳細な情報はAdmin Control Center (ACC)でご確認いただけます。

.. note::

        ローカルのACCにはNanoLaboの画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Sentinel Settings --> Admin Control Center` からもアクセスできます。

選択されているキーが期限切れなどで有効でない場合、ライセンスエラーを示すダイアログに、選択されているキーのIDが表示されます。

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
