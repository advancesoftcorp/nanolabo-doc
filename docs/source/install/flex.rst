.. _flex:

================================================
旧ライセンスの利用方法
================================================

これまで、NanoLaboではFlexNetライセンスを利用していましたが、バージョン3.1以降ではSentinelライセンスへと移行します。

移行期間として、バージョン3.1リリースから約1年間は引き続きFlexNetライセンスをご利用いただくことができます。

FlexNetライセンスをご利用の場合のみこちらのマニュアルをご参照ください。

移行期間終了後にリリースされるバージョンでは、FlexNetライセンスは利用できません。

.. _switchlicense:

ライセンスの切り替え方法(FlexNet⇔Sentinel)
===============================================

NanoLaboのインストール後またはバージョン3.1へのアップデート後の初回起動時に、FlexNetライセンスを使用するか訊ねるダイアログが表示されます。Yesを選択した場合は、ダイアログに従ってNanoLaboを再起動してください。

ライセンスの種別は、以下の方法で後から変更することが可能です。

FlexNetからSentinelへの切り替え
++++++++++++++++++++++++++++++++

NanoLaboの画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Change to Sentinel` を選択してください。
設定が変更された旨のダイアログのOKボタンをクリックすると、NanoLaboの再起動を促すダイアログが表示されます。
Yesボタンをクリック、または手動でNanoLaboを再起動すれば、ライセンスの切り替えは完了です。
以降のSentinelライセンスの設定方法は、\ :ref:`licenseonline`\ を参照してください。

.. note:: 

   NanoLaboを起動後すぐにライセンスエラーのダイアログが表示されてしまう場合、その後に表示されるLicense Registration Guidanceの"Use Sentinel licensing mode (recommended)"のチェックボックスにチェックを入れて、OKボタンをクリックすることでもライセンスの切り替えを行うことができます。この時に他のチェックボックスにチェックを入れて、同時にライセンスの設定手順を進めることも可能です。

SentinelからFlexNetへの切り替え(非推奨)
+++++++++++++++++++++++++++++++++++++++

.. note:: 

   初回起動時のダイアログで誤ってNoを選択した場合以外では、SentinelからFlexNetへの切り替えは不要です。また、有効なSentinelライセンスをお持ちでない方のみ、以下の操作が可能です。

NanoLaboを起動して、画面左上のメニュー |mainmenuicon| の :menuselection:`License --> Authentication` を選択すると、ライセンスエラーを示すダイアログが表示されます（NanoLaboを起動後、一定時間が経過することでもこのダイアログは表示されます）。ダイアログのOKボタンをクリックした後に表示されるLicense Registration Guidanceの、"Use FlexNet licensing mode temporarily (deprecated)"のチェックボックスにチェックを入れて、OKボタンをクリックしてください。表示されるダイアログに従ってNanoLaboを再起動するとライセンスの切り替えが完了します。

.. _flexw:

旧ライセンスの設定(Windows)
=============================

ライセンスファイル( :file:`nanolabo.lic` )をインストール先の :file:`license` フォルダーに格納してください。

NanoLaboを新しいバージョンにアップデートされる場合、上書きインストールが可能ですので、ライセンスファイル( :file:`nanolabo.lic` )に関する操作は必要ありません。

.. note:: 

   移行期間終了後のバージョンでは旧ライセンスは使用できなくなりますので、Sentinelライセンスをご利用ください。

.. _flexl:

旧ライセンスの設定(Linux)
=============================

ライセンスファイル( :file:`nanolabo.lic` )をインストール先の :file:`license` ディレクトリに格納してください。

NanoLaboを新しいバージョンにアップデートされる場合、上書きインストールが可能ですので、ライセンスファイル( :file:`nanolabo.lic` )に関する操作は必要ありません。

.. note:: 

   移行期間終了後のバージョンでは旧ライセンスは使用できなくなりますので、Sentinelライセンスをご利用ください。

NanoLaboのライセンス認証は、ライセンスサーバー（ライセンス認証用のプログラム）により行われます。NanoLaboの起動時に自動的にライセンスサーバーが起動されますので、通常はライセンスサーバーの操作を行っていただく必要はございません。

.. hint::

 手動でライセンスサーバーを操作することも可能です。

 - Windowsから操作する場合

  弊社ツール\ `remoteLicense <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を使うことで、Windows上から簡単にLinuxマシン上のライセンスサーバーの起動・終了・状態確認ができます。詳細は\ `マニュアル <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を参照してください。

 - Linux上で操作する場合

  ライセンスサーバーの実行ファイルはインストール先の :file:`exec.LINUX/flex/lmgrd` です。端末（ターミナル）でインストール先のディレクトリに移動したら、以下のコマンド例のように起動します。

  .. code-block:: console

   $ exec.LINUX/flex/lmgrd -c license/nanolabo.lic -l lmgrd.log

  ライセンスサーバーの状態を表示するには、インストール先の :file:`exec.LINUX/flex/lmstat` を使用します。

  .. code-block:: console

   $ exec.LINUX/flex/lmstat -a -c license/nanolabo.lic

  また、ライセンスサーバーを終了するには、インストール先の :file:`exec.LINUX/flex/lmdown` を使用します。

  .. code-block:: console

   $ exec.LINUX/flex/lmdown -c license/nanolabo.lic

.. _flexfloating:

フローティングライセンス(旧ライセンス)
+++++++++++++++++++++++++++++++++++++++

Linuxマシンに対して発行されたライセンスはフローティングライセンスとなっており、ネットワーク接続された別のマシン上（Windows・Linux）でNanoLaboを使うことができます。

- ライセンスサーバーとして使うマシン側

 remoteLicenseを使うか、またはマシン上で直接ライセンスサーバーを起動してください。

- NanoLaboを使うクライアントマシン側

 ライセンスサーバーと同じライセンスファイルを、NanoLaboのインストール先の :file:`license` ディレクトリにコピーしてください。

ライセンス認証がうまくいかない場合は、以下をご確認ください。

- クライアントからライセンスサーバーへの接続には、ライセンスファイル中に書かれたホスト名を使用します。ホスト名を使った接続ができない場合、ファイル中のホスト名をIPアドレスに書き換えることで接続できるようになることがあります。

- ライセンスサーバー起動中はライセンスマネージャーデーモン :file:`lmgrd` とベンダーデーモン :file:`advanced` の2つのプロセスが起動し、それぞれがネットワーク通信を行います。使用するポート番号は動的に決まります（\ :file:`lmgrd` は27000-27009番ポートを使用）が、ファイアウォールの設定等のためにポート番号を固定したい場合は、ライセンスファイル中に追記して指定することができます。

- ライセンスファイルはテキストファイルですので通常のテキストエディタで編集できます。ホスト名の変更・ポート番号の追記でライセンスの再発行は必要ありません。サーバー側・クライアント側両方で同じように変更してください。

 .. table::

  +-----------------------------------------------------------------------------+
  | lmgrdが30000番、advancedが30001番ポートを使うように設定する例               |
  +=============================================================================+
  || SERVER (ホスト名) COMPOSITE=(ホストID) |portlmgrd|                         |
  || VENDOR advanced |portadvanced|                                             |
  || USE_SERVER                                                                 |
  || FEATURE ...                                                                |
  +-----------------------------------------------------------------------------+

 .. hint::

  ポートを指定してクライアントから疎通確認を行うコマンド

   .. code-block:: console
    :caption: Windows(PowerShell)

    > Test-NetConnection -ComputerName (IPアドレスまたはホスト名) -Port (ポート番号)

   .. code-block:: console
    :caption: Linux

    $ nc -vz (IPアドレスまたはホスト名) (ポート番号)

- クライアント側でNanoLaboを起動したときに、ライセンスサーバーが終了してしまう場合があります。ライセンスサーバーの起動時に :file:`lmgrd` にオプションを付けることで、クライアント側から終了されないようにすることができます。

 - ``-local`` を付けると、他のマシンから終了されないようになります。
 - ``-x lmdown`` を付けると、自身を含めてどのマシンからも終了されないようになります。終了する場合は ``kill`` コマンドを使う必要があります。

.. |portlmgrd| raw:: html

   <font color="blue">30000</font>

.. |portadvanced| raw:: html

   <font color="blue">PORT=30001</font>

.. _flexm:

旧ライセンスの設定(macOS)
=============================

ライセンスファイル( :file:`nanolabo.lic` )を :file:`/Library/Application Support/AdvanceSoft/NanoLabo/license` ディレクトリに格納してください。

Finderのメニューバーから :menuselection:`移動 --> フォルダへ移動...` をクリックし、上記パスを入力していただくと簡単です。

NanoLaboを新しいバージョンにアップデートされる場合は、インストール時と同じ操作を行い、確認が表示されたら「置き換える」を選択してください。アップデート後、ライセンスファイル( :file:`nanolabo.lic` )を再度 :file:`license` ディレクトリに格納してください。

.. note:: 

   移行期間終了後のバージョンでは旧ライセンスは使用できなくなりますので、Sentinelライセンスをご利用ください。

.. _flexneumd:

NeuralMDの設定(旧ライセンス)
==========================================

.. note::

 ニューラルネットワークの学習を行う場合は、別途NeuralMDのライセンスが必要です。メトロポリス法による構造生成・ニューラルネットワークのテストについては、ライセンスは必要ありません。

.. note::

  ローカル（NanoLaboを使っているマシン）でニューラルネットワークの学習を行う場合は、画面左上のアイコン |mainmenuicon| から :menuselection:`Properties --> Advance/NeuralMD` でライセンスファイルの場所を設定してください。

.. note::

  リモート（計算サーバー等）でニューラルネットワークの学習を行う場合は、ライセンスサーバーの設定が必要です。

  - Windowsから操作する場合、弊社ツール\ `remoteLicense <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を使うことで、簡単にLinuxマシン上でライセンスサーバーを起動することができます。詳細は\ `マニュアル <https://remotelicense-doc.readthedocs.io/ja/latest/>`_\ を参照してください。

  - Linux上で操作する場合、NeuralMDのインストーラーにライセンスサーバーの実行ファイルが含まれていますので、ライセンスサーバーとして使うマシンにインストールを行い、\ `ドキュメント <https://neuralmd-doc.readthedocs.io/ja/latest/install/linux.html#launchl>`_\ に従ってライセンスサーバーを起動してください。また、環境変数 :envvar:`ADVANCED_LICENSE_FILE` にライセンスファイルのパスを設定する必要がありますので、NanoLaboの\ :ref:`Job Script設定画面 <ssh_jobtab>`\ でコマンドを追加するか、シェルの初期化ファイルで設定してください。

  - ライセンスサーバーとは別のマシンでNeuralMDを実行する場合は、実行するマシンのアクセスできる場所にライセンスファイルを置き、環境変数 :envvar:`ADVANCED_LICENSE_FILE` にファイルパスを設定（NanoLaboの\ :ref:`Job Script設定画面 <ssh_jobtab>`\ でコマンドを追加するか、シェルの初期化ファイルで設定）してください。

.. |mainmenuicon| image:: /img/mainmenuicon.png
    :scale: 75
