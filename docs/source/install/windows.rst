.. _windows:

==============================
インストール手順 (Windows)
==============================

.. _preparew:

インストールの準備
==============================

本ソフトウェアのインストールには、インストーラーを使用します。インストーラーは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

 `Advance/NanoLabo (ver.3.0) <https://www.apps.advancesoft.jp/nanolabo/install_nanolabo_windows_v3.0.exe>`_

 `Advance/NanoLabo Tool (ver.3.0) <https://www.apps.advancesoft.jp/nanolabo/install_nanolabo_tool_windows_v3.0.exe>`_

.. note::

   計算をリモートで実行する場合でも、NanoLabo本体と同じマシンにNanoLabo Toolをインストールしてください。

インストーラーにはJava Runtime Environmentが同梱されており、インストール時にインストール先フォルダにコピーされます。

.. _installerw:

インストール
=============================

まず、Advance/NanoLaboのインストーラーを実行します。言語の選択画面が出た場合は、インストール中に使用する言語を選択してください（ソフトウェア本体で使用する言語ではありません）。

画面の指示に従い、インストールの設定を行ってください。設定が終わると要約の画面が表示されます。特に、インストールフォルダーはAdvance/NanoLabo Toolのインストールの際に必要になりますので、控えておいていただくようお願いします。

.. image:: /img/install_summary.png

.. Flexライセンスのライセンスの新規申し込みは受け付けないので、登録案内は削除

.. %CommonProgramFiles(x86)%\\Aladdin Shared\\HASP\\ にhasplm.iniファイルを作成する画面の説明
.. ここでhasplm.iniを作成しない場合でも、後からライセンスサーバーのIPアドレスを設定することは可能です。詳細はフローティングライセンスの節を参照してください。

最後の画面で完了をクリックすると、Advance/NanoLaboのインストールが終了します。

続けて、Advance/NanoLabo Toolのインストーラーを実行します。

画面の指示に従い、インストールの設定を行ってください。インストール先として、Advance/NanoLaboと同じ場所を選択してください。

.. image:: /img/install_tool.png

インストール後、最後の画面で完了をクリックすると、Advance/NanoLabo Toolのインストールが終了します。

.. _launchw:

起動
=============================

インストール時にショートカットを作成した場合は、ショートカットから起動してください。

直接起動する場合は、インストール先の :file:`bin` フォルダーにある :file:`NanoLabo.exe` を起動してください。

.. _licensew:

ライセンスの設定
=============================

NanoLaboをインストールしたマシンがインターネットに接続されている場合は以下の\ :ref:`licenseonlinew`\ を、インターネットに接続されていない場合は\ :ref:`licenseoffline`\ を参照してください。

.. _licenseonlinew:

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

.. _licenseonlinec2vw:

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

.. _onlinekeyselectw:

NanoLaboを再起動後、左上のメニューから、再度 \ :menuselection:`License --> License Information` \ を選択すると、"Select a license to login"ダイアログが表示されますので、リストからライセンスキーを選択して、OKボタンをクリックしてください。

.. image:: /img/SelectLicenseDialog.png

.. note::
      
     NanoLaboを起動後に一定時間が経つと、自動でライセンスに関するダイアログが表示される場合がございますが、その場合も同様にして以降の手順に進んでください。

"SUCCESS IN LICENSING"ダイアログが表示されたら、ライセンスの設定は完了です。OKボタンをクリックしてダイアログを閉じてください。次回以降の起動時には、今回選んだライセンスキーが自動で選択されますので、ライセンスに関する操作は必要ありません。

.. _floatingw:

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
        
      - ライセンスサーバーのファイアウォールの設定で、TCP/UDP ポート 1947が開放されていない場合は、設定を変更して開放してください。（Windowsマシンの場合、インストール時に自動でこれらのポートは開放されるため、通常ではファイアウォールの設定は必要ありません。）

.. NanoLaboをインストールしているということはGUIマシンであり、ACCを利用可能なため、hasplm.iniを作成する必要はない。一方、インストーラでhasplm.iniを自動生成する機能は便利なのであってよい。

.. _licenseinfow:

ライセンスキーの確認方法
----------------------------

画面左上のメニュー |mainmenuicon| の \ :menuselection:`License --> License Information` \ を選択すると、現在選択されているキーのIDなどの情報を確認できます。

.. より詳細な情報はACCでもご確認いただけます。

選択されているキーが期限切れなどで有効でない場合、ライセンスエラーを示すダイアログに選択されているキーのIDが表示されます。

.. _changelicensew:

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

.. _ocpw:

（任意）グラフニューラルネットワーク汎用力場の設定
====================================================

LAMMPSの計算でグラフニューラルネットワーク汎用力場を使うためには、別途Python環境での設定が必要です。設定方法は\ :doc:`Open Catalyst Projectの設定 </usage/ocp>`\ 、\ :doc:`M3GNetの設定 </usage/m3gnet>`\ 、\ :doc:`CHGNetの設定 </usage/chgnet>`\ をそれぞれ参照してください。

.. _tb3w:

（任意）汎用タイトバインディング法(ThreeBodyTB)の設定
========================================================

汎用タイトバインディング法(ThreeBodyTB)の計算を行うためには、別途Julia環境での設定が必要です。設定方法は\ :doc:`こちら </usage/inputeditortb3>`\ を参照してください。

.. _sshw:

（任意）リモート計算の設定
=================================================

NanoLaboからリモートのマシンに計算ジョブを投入する場合、SSH接続の設定が必要です。設定方法は\ :doc:`こちら </usage/sshserver>`\ を参照してください。

.. _upgradew:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。以下の\ :ref:`licenseupdatew`\ を参考にしてライセンスのみを更新してください。

- 新しいバージョンにアップデートされる場合、上書きインストールが可能です。

- メジャーバージョンが新しいNanoLaboにアップデートする場合は、ライセンスの更新が必要です。以下の\ :ref:`licenseupdatew`\ を参考にしてライセンスを更新してください。

- NanoLaboと同時にNanoLabo Toolが更新されている場合は、そちらもアップデートしてください。最新版のNanoLabo Toolに同梱されている計算エンジンでの使用を想定しています。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _licenseupdatew:

ライセンスの更新
----------------------------
support.nano\@advancesoft.jpにライセンスの更新をリクエストしてください。

ライセンス登録後、noreply\@sentinelcloud.comから新しいEntitlement Certificateをメールでお送りしますので、記載されているProduct Key (PKID)を用いてライセンスの更新を行ってください。


NanoLaboをインストールしたマシンがインターネットに接続されている場合は以下の\ :ref:`licenseupdateonlinew`\ を、インターネットに接続されていない場合は\ :ref:`licenseupdateoffline`\ を参照してください。

.. _licenseupdateonlinew:

ライセンスの更新(オンライン)
+++++++++++++++++++++++++++++++

基本的な操作手順は、\ :ref:`licenseonlinew`\ と同様です。ただし、以下の注意点に留意して更新を行ってください。

.. warning::
      
      必ず更新を適用したいライセンスキーを選択した状態で、更新作業を行ってください。ライセンスキーの確認・変更方法については\ :ref:`licenseinfow`\  及び \ :ref:`changelicensew`\ を参照してください。ライセンスキーが一つしかない場合は、特に対応の必要はありません。

.. warning      
.. ライセンスキーの更新ではなく、ライセンスキーの追加を行う場合は、...の手順に従ってください。

- ライセンスの種類やバージョン等に関する警告が表示される場合は、YesをクリックしてLicense Registration Guidanceを開いて下さい。 

- 最新バージョンの有効なSentinelライセンスに対して、ライセンス条件やエディションの更新（同時実行数の追加やPro版へのアップグレード等）を適用する場合は、NanoLaboを起動後、画面左上のメニューの \ :menuselection:`License --> Activate License Automatically` \ を選択してください。

- NanoLaboの再起動後のキーの選択は必要ありません。

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

Advance/NanoLabo Toolのアンインストールが終わったら、同様にAdvance/NanoLaboをアンインストールしてください。

.. note::

   アンインストールの際に、インストールログファイルが残る場合があります。また、FlexNetライセンスをご利用の場合は、ライセンスファイルは削除されずに残ります。その際はお手数ですが手動で削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所（ :file:`C:\\Users\\ユーザ名\\.nanolabo` ）に保存され、アンインストール時には削除されません。必要に応じ、手動で削除してください。

   また、Java VMの設定は :file:`C:\\Users\\ユーザ名\\AppData\\Local\\VirtualStore` 内に保存される場合があります。
