.. _linux:

============================
インストール手順 (Linux)
============================

.. _preparel:

インストールの準備
==============================

本ソフトウェアのインストールには、インストーラーを使用します。インストーラーは3つに分かれています。それぞれ以下のリンクからダウンロードしてください。

- 本体

 `Advance/NanoLabo (ver.3.1) <https://www.nanolabo.advancesoft.jp/?sdm_process_download=1&download_id=3093>`_

- オープンソースの計算エンジン等

 `Advance/NanoLabo Tool (ver.3.1) <https://www.nanolabo.advancesoft.jp/?sdm_process_download=1&download_id=3087>`_

- 追加のGNN力場モデルファイル（FAIR-ChemまたはSevenNetを使う場合のみ）

 `Advance/NanoLabo GNNP (ver.3.1) <https://www.nanolabo.advancesoft.jp/?sdm_process_download=1&download_id=3085>`_

.. note::

   計算をリモートで実行する場合でも、NanoLabo本体と同じマシンにNanoLabo Toolをインストールしてください。

インストーラーにはJava Runtime Environmentが同梱されており、インストール時にインストール先ディレクトリにコピーされます。

.. _installerl:

インストール
=============================

端末（ターミナル）で、インストーラーのあるディレクトリに移動します。実行権限を付与したら、まずAdvance/NanoLaboのインストーラーを実行します。

.. code-block:: console

 $ chmod +x install_nanolabo_linux.bin
 $ ./install_nanolabo_linux.bin

言語の選択画面が出た場合は、インストール中に使用する言語を選択してください（ソフトウェア本体で使用する言語ではありません）。

画面の指示に従い、インストールの設定を行ってください。

.. note::

 書き込み権限のない場所にはインストールできません。インストール先として書き込み権限のある場所（ :file:`/home/ユーザー名/AdvanceSoft/NanoLabo` など）を指定するか、書き込み権限のあるユーザーでインストーラーを実行してください。

- フローティングライセンスでクライアントとして使用する場合、Sentinel-LDK-RTEをインストールしますか？でいいえを選択してください。

  ライセンスサーバーが異なるネットワークセグメントに存在する場合は、次の画面でライセンスサーバーのIPアドレスまたはホスト名を入力してください。ここで指定しない場合でも、後からライセンスサーバーのIPアドレスまたはホスト名を設定することは可能です。詳細は\ :ref:`floating`\ を参照してください。

  .. image:: /img/install_license_server_l.png

設定が終わると要約の画面が表示されます。特に、インストールフォルダーはAdvance/NanoLabo Toolのインストールの際に必要になりますので、控えておいていただくようお願いします。

.. image:: /img/install_summary_l.png

最後の画面で完了をクリックすると、Advance/NanoLaboのインストールが終了します。

続けて、Advance/NanoLabo Toolのインストーラーを実行します。

.. code-block:: console

 $ chmod +x install_nanolabo_tool_linux.bin
 $ ./install_nanolabo_tool_linux.bin

画面の指示に従い、インストールの設定を行ってください。インストール先として、Advance/NanoLaboと同じ場所を選択してください。

.. image:: /img/install_tool_l.png

インストール後、最後の画面で完了をクリックすると、Advance/NanoLabo Toolのインストールが終了します。

FAIR-ChemまたはSevenNetを使う場合は、Advance/NanoLabo GNNPも同様にインストールしてください。

.. _launchl:

起動
=============================

インストール時にショートカットを作成した場合は、ショートカットから起動してください。

直接起動する場合は、端末（ターミナル）でインストール先の :file:`bin` ディレクトリに移動し、 :file:`nanolabo.sh` を起動してください。

.. code-block:: console

 $ ./nanolabo.sh

初回起動時にはライセンスに関するダイアログが表示されますので、\ :ref:`こちら <licensesetupdate>`\ の手順に従ってライセンスの設定を行ってください。

.. _fix3ddisplay:

3Dモデルが表示されない場合の設定
==================================

Java VMの引数を追加することで表示が改善します。

画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Java VM` を開き、 :guilabel:`Arguments for Java VM` に ``-Dprism.forceGPU=true`` を追加します。その後 :guilabel:`OK` をクリックしてNanoLaboを再起動してください。

.. |mainmenuicon| image:: /img/mainmenuicon.png
      :scale: 75

.. _optionall:

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

.. _upgradel:

更新・アップグレード
=============================

- トライアル版から製品版にアップグレードされる場合、新たにインストールを行う必要はありません。\ :ref:`licenseupdate`\ を参考にしてライセンスのみを更新してください。

- 新しいバージョンにアップデートされる場合、上書きインストールが可能です。

- メジャーバージョンが新しいNanoLaboにアップデートする場合は、ライセンスの更新が必要です。\ :ref:`licenseupdate`\ を参考にしてライセンスを更新してください。

- NanoLaboと同時にNanoLabo Toolが更新されている場合は、そちらもアップデートしてください。最新版のNanoLabo Toolに同梱されている計算エンジンでの使用を想定しています。

- 本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所に保存されていますので、アップデート後もそのままお使いいただけます。

.. _uninstalll:

アンインストール
=============================

端末（ターミナル）でインストール先の :file:`_NanoLabo_Tool_installation` ディレクトリにある :file:`Change NanoLabo Tool Installation` を起動します。

.. code-block:: console

 $ AdvanceSoft/NanoLabo/_NanoLabo_Tool_installation/Change\ NanoLabo\ Tool\ Installation

画面の指示に従い、アンインストールを行ってください。

Advance/NanoLabo Toolのアンインストールが終わったら、同様にAdvance/NanoLabo GNNP、Advance/NanoLaboをアンインストールしてください。

.. note::

   アンインストールの際に、インストールログファイルが残る場合があります。また、旧ライセンスをご利用の場合は、ライセンスファイルは削除されずに残ります。その際はお手数ですが手動で削除してください。

.. note::

   本ソフトウェアの設定や作成したプロジェクト等のデータは、インストール先とは別の場所（ :file:`ホームディレクトリ/.nanolabo` ）に保存され、アンインストール時には削除されません。必要に応じ、手動で削除してください。

.. note::

   Sentinel-LDK-RTEを後からアンインストールするには、\ `Sentinel-LDK-RTEインストーラー <https://apps.advancesoft.jp/sentinel/Sentinel-LDK-RTE-for-AdvanceSoft-v10.13.1_Linux.tar.gz>`_\ に入っている :file:`dunst` を実行してください。
