.. _linux:

============================
インストール手順 (Linux)
============================

.. _preparel:

インストールの準備
==============================

本ソフトウェアのインストールには、インストーラーを使用します。インストーラーは本体の「Advance/NanoLabo」と、オープンソースの計算エンジン等を含む「Advance/NanoLabo Tool」の2つに分かれています。それぞれ以下のリンクからダウンロードしてください。

 `Advance/NanoLabo (ver.1.2) <https://github.com/advancesoftcorp/nanolabo-doc/releases/download/v1.2/install_nanolabo_linux_v1.2.bin>`_

 `Advance/NanoLabo Tool (ver.1.1) <https://github.com/advancesoftcorp/nanolabo-doc/releases/download/v1.1/install_nanolabo_tool_linux_v1.1.bin>`_

インストーラーにはJava Runtime Environmentが同梱されており、インストール時にインストール先ディレクトリにコピーされます。

.. _installerl:

インストール
=============================

端末（ターミナル）で、インストーラーのあるディレクトリに移動します。実行権限を付与したら、まずAdvance/NanoLaboのインストーラーを実行します。

.. code-block:: console

 $ chmod +x install_nanolabo_linux.bin install_nanolabo_tool_linux.bin
 $ ./install_nanolabo_linux.bin

言語の選択画面が出た場合は、インストール中に使用する言語を選択してください（ソフトウェア本体で使用する言語ではありません）。

画面の指示に従い、インストールの設定を行ってください。

.. note::

 書き込み権限のない場所にはインストールできません。インストール先として書き込み権限のある場所（ :file:`/home/ユーザー名/AdvanceSoft/NanoLabo` など）を指定するか、書き込み権限のあるユーザーでインストーラーを実行してください。

設定が終わると要約の画面が表示されます。特に、インストールフォルダーはAdvance/NanoLabo Toolのインストール、およびライセンスの設定の際に必要になりますので、控えておいていただくようお願いします。

.. image:: /img/install_summary_l.png

インストールが終わると、ライセンス登録案内が表示されます。ライセンス登録がお済みでない場合は、必要な項目をご記入ください。次へをクリックすると、ライセンス登録メールの内容が表示されますので、弊社宛に送信してください。

.. image:: /img/install_license_l.png

.. note::

 メール本文の「ホストＩＤ」が空欄になっている場合、Host ID取得時に必要なredhat-lsbライブラリがインストールされていない可能性があります。その場合、次のコマンドをroot権限で実行してインストールしてください。

 .. code-block:: console

  # yum -y install redhat-lsb-core

 インストーラーで一旦「戻る」をクリックし、再度「次へ」をクリックしていただくことで、Host IDの取得を再試行します。

.. note::

 ここでライセンス登録を行わない場合でも、ソフトウェア起動時に表示される案内画面から登録していただくことができます。

最後の画面で完了をクリックすると、Advance/NanoLaboのインストールが終了します。

続けて、Advance/NanoLabo Toolのインストーラーを実行します。

.. code-block:: console

 $ ./install_nanolabo_tool_linux.bin

画面の指示に従い、インストールの設定を行ってください。インストール先として、Advance/NanoLaboと同じ場所を選択してください。

.. image:: /img/install_tool_l.png

インストール後、最後の画面で完了をクリックすると、Advance/NanoLabo Toolのインストールが終了します。

.. _licensel:

ライセンスの設定
=============================

ライセンス登録後、原則5営業日以内にライセンスファイル( :file:`nanolabo.lic` )をお送りします。インストール先の :file:`license` ディレクトリにコピーしてください。

本ソフトウェアを使用する際には、ライセンスサーバー（ライセンス認証用のプログラム）を起動しておく必要があります。実行ファイルはインストール先の :file:`exec.LINUX/flex/lmgrd` です。端末（ターミナル）でインストール先のディレクトリに移動したら、以下のコマンド例のように起動してください。

.. code-block:: console

 $ exec.LINUX/flex/lmgrd -c license/nanolabo.lic -l lmgrd.log

ライセンスサーバーの状態を表示するには、インストール先の :file:`exec.LINUX/flex/lmstat` を使用します。

.. code-block:: console

 $ exec.LINUX/flex/lmstat -a -c license/nanolabo.lic

また、ライセンスサーバーを終了するには、インストール先の :file:`exec.LINUX/flex/lmdown` を使用します。

.. code-block:: console

 $ exec.LINUX/flex/lmdown -c license/nanolabo.lic

.. _launchl:

起動
=============================

インストール時にショートカットを作成した場合は、ショートカットから起動してください。

直接起動する場合は、端末（ターミナル）でインストール先の :file:`bin` ディレクトリに移動し、 :file:`nanolabo.sh` を起動してください。

.. code-block:: console

 $ ./nanolabo.sh

.. _upgradel:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。ライセンスファイルのみ置き換えてください。

- 新しいバージョンにアップデートされる場合、上書きインストールを行うことも可能ではありますが、あらかじめ以前のバージョンをアンインストールするか、インストール先を変更していただくことをお勧めします。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _uninstalll:

アンインストール
=============================

端末（ターミナル）でインストール先の :file:`_NanoLabo_Tool_installation` ディレクトリにある :file:`Change NanoLabo Tool Installation` を起動します。

.. code-block:: console

 $ AdvanceSoft/NanoLabo/_NanoLabo_Tool_installation/Change\ NanoLabo\ Tool\ Installation

画面の指示に従い、アンインストールを行ってください。

Advance/NanoLabo Toolのアンインストールが終わったら、同様にAdvance/NanoLaboをアンインストールしてください。

.. note::

   アンインストールの際に、インストール先のライセンスファイルは削除されずに残ります。また、インストールログファイルが残る場合があります。その際はお手数ですが手動で削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所（ :file:`ホームディレクトリ/.nanolabo` ）に保存され、アンインストール時には削除されません。必要に応じ、手動で削除してください。