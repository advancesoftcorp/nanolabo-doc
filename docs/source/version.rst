.. _version:

==============
バージョン情報
==============

2025/07/18 バージョン3.1.1
 - （macOS版）Sentinel LDK-RTEのインストール有無の確認方法を改善

   - macOS版・本体のみの更新です。Windows版・Linux版の更新、NanoLabo Toolインストーラーの更新はありません。

2025/04/21 バージョン3.1
 - 機能追加

   - 密度を指定してスラブモデルをリサイズする機能を分子充填画面内に追加
   - QE: DOS・Bandのバンドギャップの自動計算（プロットに表示を追加）
   - LAMMPS: 各種オープンソースGNN力場への対応を追加（FAIR-Chem(eqV2)、ORB、MatterSim、MACE、SevenNet新モデル）
   - ThreeBodyTB v1.0.0に対応
   - QE: |Gamma|\ -Trickの使用有無を切り替えるオプションを追加

 - 変更・修正

   - ライセンス管理モジュールをSentinelに変更

     - Sentinelは従来のライセンスファイルと互換性がありません。
     - 移行期間として、約1年間は従来方式とSentinelから選択してライセンス認証が行えます。
     - 新規に発行するライセンスはSentinelとなります。移行期間終了後のバージョンでは、従来のライセンスは使えなくなります。

   - Materials Projectのlegacy API廃止に伴い、Materials Finderで使用するAPIを最新版に切り替え

     - :ref:`APIキー設定 <materialsfinder>`\ が必須となります。

   - （macOS版）Intel CPUのmacOSのサポートを終了
   - （Linux版）ローカルJob Managerの性能改善（計算エンジンの実行ファイルコピーを省略）
   - ChatbotおよびAutopilotの性能改善（GPT-3.5-turbo |rarr| GPT-4o-mini、いくつかの結晶構造を改善）
   - Java実行環境をアップデート(Liberica JRE 17.0.14+10)
   - 内蔵ウェブブラウザーのライブラリJxBrowserをアップデート(7.37.1\ |rarr|\ 8.5.0)
   - 内蔵ウェブブラウザーで証明書検証時に不要なエラーメッセージが出る問題を修正
   - QE: 等値面の描画が曲率により欠ける場合がある問題を修正
   - QE: 原子数1000以上の構造最適化・第一原理MDの出力読み込みに対応
   - QE: |Gamma|\ 点のみでSCF計算を実行していた場合、その後のDOS・Band計算時にSCFの再計算を実行しないよう変更
   - LAMMPS: Improper読み込みの不具合を修正
   - LAMMPS: GNN力場で使用するDFT-D3補正のパッケージをtorch_dftd3に変更
   - LAMMPS: GNN力場の開発プロジェクト移行に伴い旧バージョン（従来版M3GNet、Open Catalyst Project）を廃止
   - LAMMPS: GNN力場用実行ファイルを統一・Pythonライブラリバージョンを3.9 |rarr| 3.11に変更

 - その他、動作改善・バグ修正等

2024/07/17 バージョン3.0
 - 機能追加

   - モデラーのAutopilot機能（世界初となる材料モデル生成AI）
   - QE: 波動関数の3次元データ可視化機能（SCF設定 |rarr| :guilabel:`3D Volumes` の詳細設定ボタンから有効化）
   - LAMMPS: M3GNetのGPU使用の切り替え
   - モデラー内のモデル選択画面にStopボタンを表示
   - 原子構造ビューワーにモデルインポート機能を追加（右クリックメニュー内）

   - （Linux版・macOS版）プロキシに関する機能追加・修正

     - Windows版2.9.3と同じ内容です。
     - SSH接続時にSOCKSプロキシを設定する機能を追加
     - 内蔵ウェブブラウザーのプロキシをPACで設定する機能を追加
     - 内蔵ウェブブラウザーの証明書検証失敗時に接続を継続するか確認するダイアログを追加
     - 内蔵ウェブブラウザーでプロキシの認証に失敗する場合がある不具合を修正

 - 変更・修正

   - 分子充填機能における分子および真空領域の体積計算アルゴリズムの改善
   - 分子吸着機能において上部真空層のサイズを自動調整するように改修
   - QE: バンド数のデフォルトをフルバレンス（全価電子軌道数）に変更
   - LAMMPS: CHGNet・M3GNet(MatGL)の最新バージョンに対応
   - （Windows版）curl.exeの同梱を廃止（OS付属のcurl.exeを使用）

 - その他、動作改善・バグ修正等

2024/04/12 バージョン2.9.3
 - （Windows版）プロキシに関する機能追加・修正

   - SSH接続時にSOCKSプロキシを設定する機能を追加
   - 内蔵ウェブブラウザーのプロキシをPACで設定する機能を追加
   - 内蔵ウェブブラウザーの証明書検証失敗時に接続を継続するか確認するダイアログを追加
   - 内蔵ウェブブラウザーでプロキシの認証に失敗する場合がある不具合を修正
   - Windows版・本体のみの更新です。Linux版・macOS版の更新、NanoLabo Toolインストーラーの更新はありません。

2024/03/25 バージョン2.9.2
 - 機能追加

   - ChatGPTを活用した、NanoLaboの使い方に関するチャットボット機能を搭載
   - マルチGPU対応の汎用GNN力場"SevenNet"のインターフェースを実装
   - ツールバーのボタンの表示／非表示設定
   - QE: NEBのイメージインポート時のアルゴリズムを調整する設定項目
   - LAMMPS: ReaxFFの設定において、LG-vdWの設定項目を追加
   - LAMMPS: セル形状の2次元方向および1次元方向のみの変形に対応
   - SSHサーバー設定画面で、設定の並び替えなどができる編集画面を追加
   - SSHサーバー設定画面で、設定を新規作成する際に既存の設定内容をコピーする機能を追加

   - NeuralMD: Ver.1.9.2に対応した機能追加

     - SLHMC: セル形状の2次元方向および1次元方向のみの変形に対応

 - 変更・修正

   - QE: 孤立原子系のOccupationsのデフォルトをFixedからSmearingに変更
   - SLHMC: SCF計算が収束しなかった場合のデータをプロットから除外
   - LAMMPS: Open Catalyst Projectの最新バージョンに対応
   - LAMMPS: MatGLの最新バージョンに対応
   - LAMMPS: GNN力場使用時に元素名Pmが正しく認識されない不具合を修正
   - エクスプローラーでWord/Excel/PowerPointの一時ファイルを非表示化
   - （Mac版）内蔵ウェブブラウザーにてズームのショートカットキーが使えない不具合を修正
   - 内蔵ウェブブラウザーのライブラリJxBrowserをアップデート(7.34\ |rarr|\ 7.37.1)
   - SSHサーバー設定のFOCUSスパコン用のプリセット設定を最新版に改訂
   - リモート実行時、PBSのqstatコマンドで長いジョブIDの末尾が省略されている場合に対応

 - その他、動作改善・バグ修正等

2023/11/15 バージョン2.9.1
 - 機能追加

   - Matlantis\ |tm|\ との連携機能を追加（Jupyter Interface使用）
   - LAMMPS: MatGL版のM3GNet力場（従来のM3GNetの後継版）に対応
   - LAMMPS: グラフニューラルネットワーク力場CHGNetに対応
   - LAMMPS: 外部電場用の電荷設定機能を追加（Force-Field画面内）
   - LAMMPS: M3GNet/CHGNetのモデルをインポートする機能を追加
   - LAMMPS: Scheme画面の機能強化

     - Undo/Redo機能（＋ショートカットキー）を追加
     - 熱伝導率および粘性係数計算時の自己相関関数の詳細設定を追加

   - 内蔵ウェブブラウザーの機能強化

     - ズーム機能を追加
     - ページ内検索のツールバーボタンを追加
     - 右クリックメニューを追加
     - 選択した文字列をMaterials Finderで検索する機能を追加

   - Jupyter Interfaceの機能強化

     - ドラッグ＆ドロップの挙動設定（ファイルを直接JupyterLabに渡すオプションを追加）
     - ページ内検索機能を追加

   - スクリーンショット画像のクリップボードへのコピーおよびドラッグ＆ドロップ対応
   - Materials ProjectおよびPubChemのウェブページを内蔵ブラウザーで表示するオプションを追加
   - モデラーの表面への小分子吸着機能で、任意の分子をインポートして使う機能を追加
   - 擬ポテンシャルファイルのインポート機能を追加
   - プロキシサーバーの有効／無効設定を追加
   - Save Movie（動画ファイルとして保存）の出力形式にXYZ、CIF、POSCARを追加
   - リモートジョブ投入時に転送するバイナリのMD5チェックを追加
   - NanoLabo Toolのバージョンチェック機能を追加

 - 変更・修正

   - QE: 第一原理MD実行時のResult画面のシミュレーション時間表示パネル（進捗表示）の不具合を修正
   - QE: NEBのイメージ表示切替時の不具合を修正
   - QE: 擬ポテンシャルファイルのダウンロード機能の改善
   - QE: 3次元の電荷密度分布を可視化する際のIsovalue初期値を変更
   - LAMMPS: バージョンを2Aug2023にアップデート
   - LAMMPS: Scheme編集時にOptionがリセットされる不具合を修正
   - LAMMPS: M3GNetでDFT-D3補正を使わない場合はdftd3のインポートを行わないよう変更
   - LAMMPS: OPLS-AAのパラメーターが未定義の一部の系について、代替のパラメーターを設定して割り当てエラーを回避
   - NeuralMD: Ver.1.9.1にアップデート
   - 外部Jarライブラリーを分離して、NanoLaboの起動速度を向上
   - 内蔵ブラウザにシステムのロケールを継承（日本語フォントなどの表示が改善）
   - NanoLaboを複数起動した際の動作改善
   - ローカル実行時に適用するOpenMP並列関連の環境変数の調整

 - その他、動作改善・バグ修正等

2023/08/03 バージョン2.9
 - 機能追加

   - 汎用タイトバインディング法パッケージ"ThreeBodyTB"のインターフェースを追加
   - NeuralMD: Ver.1.9に対応した機能追加・変更

     - 複数のニューラルネットワークモデルの平均値を用いて1つの力場を定義する手法の設定項目を追加
     - Super Epoch法（教師データを複数のサブセットに分割して、各サブセットを使った学習処理を順次実行する）の設定項目を追加
     - 一部のパラメーターのデフォルト値を変更（無機結晶に特化した値を採用）

   - NeuralMD: SCFの計算条件をグランドプロジェクト内で共有する機能を追加
   - NeuralMD: グランドプロジェクトで、教師データ用の構造を生成する方法としてSLHMCを追加
   - NeuralMD: グランドプロジェクトで、リモートサーバーで実行したQuantum ESPRESSOの計算結果のダウンロードを抑止できる機能を追加
   - NeuralMD: グランドプロジェクトで、Quantum ESPRESSOでの教師データ生成の継続計算に対応
   - 計算結果のグラフ右上の情報をクリップボードにコピーする機能を追加
   - PDFファイル閲覧機能を追加（エクスプローラー上で開くか、ファイルを画面にドラッグ＆ドロップすると表示）

 - 変更・修正

   - JRE17移行に伴う不具合の回避（画面レイアウトの乱れ、原子構造ビューワーでのメモリリーク等）
   - プロット表示時のアニメーションを無効化
   - Java仮想マシンのGCの性能を向上
   - QE: |Gamma|\ 点のみ、かつNon-Colinearスピンを使用した際の不具合を解消
   - QE: Always OfflineモードのリモートサーバーでTD-DFTを実行した際に誘電関数がプロットされない不具合を解消
   - リモートサーバー上のファイル所有者が"domain users"の場合に発生していた不具合を解消
   - NeuralMD: LinuxでSLHMCを実行する際、ログインシェルがdashだと動作しない不具合を解消
   - 内蔵ウェブブラウザーのライブラリをJxBrowser（Chromiumベースのブラウザー）に変更

 - サポート対象OSにWindows 11を追加・macOSのサポート対象をVentura(13)以降に変更
 - その他、動作改善・バグ修正等

2023/04/25 バージョン2.8
 - 機能追加

   - Jupyter Interface for NanoLaboを搭載（2023年7月31日まで無償利用可）
   - （Mac版）メニューバーを使用できるように改修

 - 変更・修正

   - Java実行環境をJRE8からJRE17に変更
   - LAMMPS: Schemeに構造最適化を含む場合の計算結果のグラフ描画の不具合を改修
   - LAMMPS: MEAM力場使用時の元素の設定(pair_coeff)を修正
   - CIFファイルインポート・エクスポートの互換性向上
   - （Windows版）タスクバー上のピン留め・複数ウィンドウ表示時の動作改善
   - 設定ファイル等の保存先を\ :file:`.nanolabo/`\ から\ :file:`.nanolabo/.system/` に変更

     - 以前のバージョンをお使いの場合、アップデート後の最初の起動時にファイル等が移動されます。

 - その他、動作改善・バグ修正等

2023/03/08 バージョン2.7.1
 - CentOS7で、NanoLabo Tool2.7のMPIライブラリが正常に動作しない問題を解消

   - CentOS7のリモートサーバーにジョブ投入した場合、およびCentOS7上でローカル実行する場合に問題がありました。該当する場合、計算を実行するとlibhwloc.soに関するエラーが出力されます。
   - NanoLabo本体のインストーラーの更新はありません。NanoLabo Tool2.7.1のみをダウンロード・インストールしてください。
   - 既にリモートサーバーにジョブ投入してしまった場合は、サーバーのWork Directoryの :file:`.nanobin2.7` フォルダを削除してください。

2023/03/06 バージョン2.7
 - 機能追加

   - NeuralMD: Ver.1.8に対応した機能追加

     - ReaxFFを用いた\ |Delta|\ -NNP法

   - LAMMPS: 無機固体用のグラフニューラルネットワーク力場M3GNetに対応
   - LAMMPS: Open Catalyst 2022(GemNet-dT)力場に対応
   - PJMジョブ管理システムに対応
   - リモートジョブ投入後にローカルのプロジェクトフォルダを移動しても結果を取得できるよう対応
   - プロジェクトが :file:`.nanolabo` フォルダ外にある、またはプロジェクト名にLinuxで使えない文字が含まれている場合でもジョブ投入できるよう対応
   - （Mac版）Apple M1対応版（ARM版）をリリース

     - 従来版（Intel版）とは別のインストーラーとして提供しますので、ダウンロード時にお使いのマシンに合ったものを選んでください。

 - 変更・修正

   - PDOS電卓のDOS定義数上限を16個に増加
   - リモートサーバー接続時、ホスト鍵としてRSA/SHA-1(ssh-rsa)以外の形式に対応
   - 材料データベース検索で使用しているMaterials Project APIのURL変更に対応

     - バージョン2.6以前で暫定的に設定ファイルの変更で対応されていた場合、2.7にアップデート後はそのまま使っていただいても、変更を戻していただいても大丈夫です。

 - その他、動作改善・バグ修正等

2022/09/30 バージョン2.6
 - 機能追加

   - NeuralMD: Ver.1.7に対応した機能追加

     - SLHMCのセル変形方法としてNNP-MDをNPHで行う方法を追加
     - SLHMCのエラー終了時にCRASHログを出力
     - GPU使用の設定を追加（Linux・NeuralMD Pro版のみ）

   - NeuralMD: SLHMCをリモート実行した際の、データ(slhmc_dat)のダウンロード有無の設定
   - LAMMPS: 初速度を指定の温度で生成する機能
   - LAMMPS: 計算実行前に、入力ファイルを表示および編集する機能
   - LAMMPS: 計算結果の時系列プロットで、データ点を省略して表示速度を向上（設定で切り替え可能）
   - LAMMPS: NPHアンサンブルに対応
   - LAMMPS: 多体力場(Tersoff、EAM、ReaxFF、NeuralMD)使用時、入力ファイル中の原子の順序を自動修正
   - LAMMPS: 構造最適化時のセル変形の設定
   - LAMMPS: 入力ファイルに任意のコマンドを追加する機能
   - LAMMPS: ユーザー定義を含む任意の変数をCSV出力＆時系列プロットする機能
   - LAMMPS: 画面上で原子グループを定義する機能
   - LAMMPS: 原子グループに電場を印加／外力を加える／指定速度で移動させる／指定速度で格子変形させる機能
   - LAMMPS: ニューラルネットワーク力場の計算をGPU化（Linuxのみ）
   - QE: Phonon計算にて、有効電荷を使用した格子誘電関数の計算機能
   - QE: Phonon分散にて、Non-Analytic Termの計算に対応
   - QE: Car-Parrinello MDにおけるAutopilotの設定画面を追加
   - QE: NanoLabo Tool に新しい擬ポテンシャルライブラリーを追加（GBRV、SSSP）
   - QE: SCF計算における初期電荷量を設定する機能
   - 分子描画機能において、3次元構造の生成にRDkitを使用（UFFによる構造最適化）
   - より対称性の高い結晶構造を探索する機能（判定閾値を指定した対称性判定）
   - リモートサーバーへの接続をテストする機能
   - SSH接続の公開鍵認証で、OpenSSH形式の秘密鍵に対応
   - NanoLabo Tool PATH設定用バッチファイルを同梱（Window版のみ）
   - 外部ファイラーでフォルダーを開く機能

 - 変更・修正

   - LAMMPS: 最新バージョン(2Jun2022)に変更
   - LAMMPS: 入力ファイルのフォーマットを変更（ユーザーが編集可能な項目を増強）
   - LAMMPS: デフォルトの擬ポテンシャルをGBRV（GBRV非対応の元素はSSSP）に変更
   - リモートサーバーからファイルをダウンロードする際のコマンド数を削減（通信速度の向上）

 - サポート対象OSからCentOS 6を除外
 - 計算エンジンのCentOS版・AlmaLinux版を共通化（NanoLabo Toolインストーラーの一本化）
 - アイコンを変更
 - その他、動作改善・バグ修正等

2022/05/20 バージョン2.5
 - 機能追加

   - LAMMPS: NPTアンサンブルにおけるセル変形の制約条件の設定機能
   - NeuralMD: Ver.1.6に対応した機能追加

     - 自己学習ハイブリッドモンテカルロ法のインターフェースを追加

   - NeuralMD: 学習時にエネルギーのみ最適化する（力を使わない）設定
   - SSH接続用のプロキシ設定機能

 - 変更・修正

   - QE: ESM法使用時のフォノンモード表示の不具合を修正
   - QE: BAND、DOS、NMRの結果プロットでLine Width、Line Typeが設定できない不具合を修正
   - NeuralMD: Behler対称関数使用時、編集したG2・G3パラメーターが計算に反映されない不具合を修正
   - （Linux版）ローカルでJob manager使用時にグランドプロジェクトの計算実行に失敗する不具合を修正
   - （Mac版）一部ファイル選択ダイアログの拡張子フィルタを修正
   - nanolabo.pyのset_all_atoms()のバグ（"error: invalid atomsFile"が必ず発生する）を修正

 - その他、動作改善・バグ修正等

2022/02/04 バージョン2.4
 - 機能追加

   - LAMMPS: Open Catalyst Projectの汎用力場（グラフニューラルネットワーク）に対応
   - メモリー使用量、Java VMの引数の設定を追加（NanoLabo本体に適用）
   - NeuralMD: Ver.1.5に対応した機能追加

     - ライセンスエラー（実行数上限）時の待機設定
     - 教師データを分割してテストデータを作成する機能
     - RMSEプロットにin-situテスト結果の系列を追加
     - その他、設定項目追加

   - LAMMPS: ログ出力タイミングの設定項目を追加
   - VASPのPOSCAR形式での原子座標ファイル出力

 - 変更・修正

   - （Linux版）QEおよびLAMMPSのMPIライブラリ/コンパイラをOpen MPI/oneAPIに変更（以前はIntel MPI/Intel Compiler）
   - 計算サーバーへのジョブ投入時、ユーザー名が長いとジョブ状態の取得に失敗することがある不具合の修正

 - サポート対象OSにAlmaLinux 8を追加
 - その他、動作改善・バグ修正等

2021/12/10 バージョン2.3
 - 機能追加

   - NeuralMD: ニューラルネットワーク力場の学習（最適化）およびテスト機能
   - NeuralMD: メトロポリス法による教師データ用の構造生成機能

     - 設定ファイル(sannp.metro)読み込み対応

   - 結合長・結合角・二面角の測定機能
   - モデラー画面での格子ベクトル編集機能
   - 格子ベクトルの方向の取り直しを伴うスーパーセルモデルの作成機能
   - QE: 交換相関汎関数にRPBEを追加

 - 変更・修正

   - QE: NEB設定時の補間イメージの生成アルゴリズムの改良（多原子分子の反応に対応）
   - Java実行環境をLiberica JRE 8に変更
   - Materials APIの仕様変更に対応

 - その他、動作改善・バグ修正等

2021/10/01 バージョン2.2
 - 機能追加

   - [Pro] QE: GIPAW法によるNMRスペクトル計算機能
   - QE: Car-Parrinello法分子動力学(CPMD)計算機能
   - MDL Molfile(.mol, .sdf)読み込み対応

 - 変更・修正

   - QE: NEB初期設定時の補間イメージの順序を修正

 - Quantum ESPRESSOのバージョンを6.7へ更新
 - その他、動作改善・バグ修正等

2021/06/04 バージョン2.1
 - 機能追加

   - 低速ネットワーク用設定
   - NeuralMD用教師データ作成機能（グランドプロジェクト）
   - QE: SCF計算結果の3D表示（電荷密度、ポテンシャル、スピン偏極）
   - QE: フォノン計算の収束閾値設定
   - LAMMPS: 原子速度設定画面

 - 変更・修正

   - リモートジョブ実行時のSSHセッション数を抑制
   - QE: スピン有効時、設定によりDOSが表示されない不具合を修正
   - QE: スラブモデル使用時、BAND計算のデフォルトk点パスを変更
   - lsf2pbs/qsub変更（bsub呼び出し方法）

 - その他、動作改善・バグ修正等

2020/11/30 バージョン2.0
 - 機能追加

   - [Pro] 高分子モデラー
   - QE: XAFS計算
   - LAMMPS dumpファイル読み込み対応

 - その他、動作改善・バグ修正等

2020/07/29 バージョン1.5
 - 機能追加

   - QE: 交換相関汎関数設定（ハイブリッド汎関数・ファンデルワールス相互作用）
   - QE: PDOS電卓
   - リモート実行時のアクセス一時停止、サーバー上のファイルダウンロード・削除

 - その他、動作改善・バグ修正等

2020/04/27 バージョン1.4
 - 機能追加

   - LAMMPS: 熱伝導率、粘性係数、拡散係数、動径分布関数の計算・可視化
   - LAMMPS: Tersoff力場対応
   - QE: SCFのDiagonalizationにrmmを追加（デフォルト）
   - QE: TD-DFTのAlgorithm追加
   - 格子ベクトルの反転・入れ替え
   - 座標軸に沿った原子移動
   - スラブモデルに対する追加の編集機能
   - Result画面ファイルツリーのコンテキストメニュー・ドラッグ操作
   - ウィンドウサイズ保存

 - （Linux版）長時間使用時に正常に動作しなくなる不具合を修正
 - その他、動作改善・バグ修正等

2019/09/30 バージョン1.3
 - 機能を強化した「Pro版」をリリース
 - [Pro] 界面ビルダー
 - その他、動作改善・バグ修正等

2019/08/05 バージョン1.2.1
 - （macOS版）環境により計算エンジンが動作しない問題を解消
 - その他、バグ修正等

2019/06/28 バージョン1.2
 - 機能追加

   - Nudged Elastic Band（NEB）法
   - Effective Screening Medium（ESM）法
   - Python連携

 - 原子構造ビューアーの機能改善

2019/05/09 バージョン1.1.2
 - 機能追加

   - 起動時アップデートチェック
   - ラムダシステム

 - LAMMPSでReaxFF使用時にreal単位系を使うよう修正
 - その他、動作改善・バグ修正等

2019/01/18 バージョン1.1.1
 - バグ修正（プロキシ使用時の通信不具合）

2018/12/21 バージョン1.1
 - macOS対応
 - 機能追加

   - 計算サーバーへのジョブ投入（SSH接続）
   - 有機分子の描画
   - 表面への小分子吸着
   - 溶媒分子充填
   - Primitive Cell、Standard Cellの自動決定
   - 空間群の判定
   - 外部テキストエディターでのファイル表示
   - エクスプローラーの機能強化

 - その他、バグ修正等

2018/08/01 バージョン1.0
 - 初回リリース

.. |Delta| raw:: html

   &Delta;

.. |gamma| raw:: html

   &Gamma;

.. |tm| raw:: html

   &trade;

.. |rarr| raw:: html

   &rarr;
