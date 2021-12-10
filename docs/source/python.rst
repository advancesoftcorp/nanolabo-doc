.. _python:

=============================
Python連携
=============================

Advance/NanoLaboには外部のプログラムから操作するためのインターフェースが備わっています。同梱のモジュールをインポートすることで、PythonからNanoLaboを操作する関数が使えるようになります。

準備
===============================

Python 2系またはPython 3系の実行環境でお使いいただけます。
Pythonのセットアップ・実行方法については、\ `Pythonのドキュメント <https://docs.python.org/ja>`_\ を参照してください。

Windowsでの使用には、pywin32モジュールが必要です。\ ``pip``\ を使ってインストールするには、以下のコマンドを実行します。

.. code-block:: console

 > python -m pip install pywin32

モジュールファイル\ :file:`nanolabo.py`\ がWindows・Linux版はNanoLaboのインストール先、macOS版はインストーラーdmgの :file:`python` フォルダにあります。必要に応じて好きな場所にコピーし、お使いください。これをインポートすることで、モジュール名 ``nanolabo`` を使って関数にアクセスできるようになります。

.. code-block:: python

 >>> import nanolabo

モジュールのヘルプは、以下のように組込み関数を使って参照できます。

.. code-block:: python

 >>> help(nanolabo)                #ヘルプの表示
 >>> dir(nanolabo)                 #関数等の一覧表示
 >>> help(nanolabo.open_project)   #個々の関数のヘルプの表示

.. note::

 操作するNanoLaboをあらかじめ起動しておいてください。複数のNanoLaboが起動している場合、最初に起動したNanoLaboのみがPythonからの操作を受け付けます。

関数一覧
===============================

プロジェクト操作
---------------------

.. py:function:: open_project(path)

 プロジェクトを開きます。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.open_project(r"C:\Users\demouser\.nanolabo\SiC")

  >>> nanolabo.open_project("SiC")   #デフォルトの保存先にあるプロジェクト

.. py:function:: close_project(path)

 プロジェクトを閉じます。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.close_project(r"C:\Users\demouser\.nanolabo\SiC")

  >>> nanolabo.close_project("SiC")   #デフォルトの保存先にあるプロジェクト

.. py:function:: save_project(path, [dst_path=""])

 プロジェクトを保存します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str dst_path: プロジェクトの保存先をフォルダの絶対パスで指定します。デフォルトの保存先に保存する場合は、プロジェクト名だけで指定できます。指定したフォルダが既に存在する場合は保存しません。省略した場合は、pathで指定したプロジェクトを上書き保存します。
 
 .. code-block:: python
  :caption: 例

  >>> nanolabo.save_project("SiC", "SiC2")                       #別名で保存

  >>> nanolabo.save_project(r"C:\Users\demouser\.nanolabo\SiC")  #上書き保存

.. py:function:: mode_project(path, mode)

 プロジェクトの計算エンジンを変更します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str mode: プロジェクトの計算エンジンを指定します。有効な値："QuantumESPRESSO", "LAMMPS"

 .. code-block:: python
  :caption: 例

  >>> nanolabo.mode_project("SiC", "LAMMPS")

.. py:function:: run_project(path, [jobType="", [host="", [queue=""]]])

 計算を実行します。リモートサーバーにジョブを投入する場合は、事前に\ :doc:`usage/sshserver`\ をしておく必要があります。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str jobType: 実行する計算の種類を指定します。有効な値："SCF", "OPTIMIZ", "MD", "DOS", "BAND", "TDDFT", "Phonon", "PhDisp", "NEB", "LAMMPS"
 :param str host: ローカルで実行する場合は"localhost"、リモートサーバーにジョブを投入する場合はその設定名を指定します。省略した場合、直前に実行した計算の設定を引き継ぎます。
 :param str queue: ジョブを投入するキューの設定名を指定します。ローカルで実行する場合は指定しても無視されます。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.run_project("SiC", "SCF", "localhost")                #ローカル実行

  >>> nanolabo.run_project("SiC", "SCF", "hostname", "queuename")    #リモートジョブ投入

.. py:function:: create_project(file_path, [project_path=""])

 原子構造ファイルからプロジェクトを作成します。

 :param str file_path: 原子構造ファイルを絶対パスで指定します。カレントフォルダにあるファイルはファイル名だけで指定できます。
 :param str project_path: 作成したプロジェクトの保存先を絶対パスで指定します。デフォルトの保存先に保存する場合は、プロジェクト名だけで指定できます。省略した場合、原子構造ファイルの名前（拡張子なし）をプロジェクト名にします。指定した保存先が既に存在する場合、プロジェクトを作成しません。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.create_project(r"C:\Users\demouser\sic.cif", "SiC")

原子構造操作
---------------------

.. py:function:: clear_all_atoms(path)

 原子をすべて消去します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.clear_all_atoms("SiC")

.. py:function:: set_all_atoms(path, atomsFile)

 ファイルで定義した原子構造を設定します。既にプロジェクトにある情報は上書きされます。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str atomsFile: 原子構造の情報を含むファイルを絶対パスで指定します。カレントフォルダにあるファイルはファイル名だけで指定できます。

 ファイルの形式は次の例のようになります。\ :py:func:`qe_get_geometry`\ で出力したファイルを読み込むことができます。

 .. code-block:: none

   3.09200995   0.00000000   0.00000000   # ax ay az
  -1.54600497   2.67775791   0.00000000   # bx by bz
   0.00000000   0.00000000   5.07335137   # cx cy cz
  4                                       # number of atoms
  Si     -0.000002   1.785172   2.534588   1   1   1   # name x y z FIXED_X FIXED_Y FIXED_Z
  Si      1.546002   0.892585   5.071262   0   0   0   #            0:fixed, 1:mobile
  C      -0.000002   1.785172   4.441264   0   0   0
  C       1.546002   0.892585   1.904590   0   0   0

 .. code-block:: python
  :caption: 例

  >>> nanolabo.set_all_atoms("SiC", r"C:\Users\demouser\sic.txt")

.. py:function:: get_lattice(path)

 格子ベクトルを取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :return: 格子ベクトル
 :rtype: list[list[float]]

 .. code-block:: python
  :caption: 例

  >>> nanolabo.get_lattice("SiC")
  [[3.09201, 0.0, 0.0], [-1.546005, 2.677759208755522, 0.0], [0.0, 0.0, 5.07335]]

.. py:function:: set_lattice(path, lattice)

 格子ベクトルを設定します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param list[list[float]] lattice: 格子ベクトルを指定します。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.get_lattice("SiC", [[3.09201, 0.0, 0.0], [-1.546005, 2.677759208755522, 0.0], [0.0, 0.0, 5.07335]])

.. py:function:: num_atoms(path)

 原子数を取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :return: 原子数
 :rtype: int

 .. code-block:: python
  :caption: 例

  >>> nanolabo.num_atoms("SiC")
  4

.. py:function:: add_atom(path, name, x, y, z)

 原子を追加します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str name: 追加する原子の種類を元素記号で指定します。
 :param float x, y, z: x, y, z座標(\ |angs|\ )を指定します。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.add_atom("SiC", "C", 0.5, 0.5, 0.5)

  >>> coords = [0.5, 0.5, 0.5]
  >>> nanolabo.add_atom("SiC", "C", *coords)   #リストを展開して渡す

.. py:function:: remove_atom(path, index)

 原子を削除します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param int index: 削除する原子を通し番号で指定します。番号は0から数えます\ :ref:`*<pynoteindex>`\ 。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.remove_atom("SiC", 0)

.. py:function:: get_atom_name(path, index)

 原子の種類を取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param int index: 原子を通し番号で指定します。番号は0から数えます\ :ref:`*<pynoteindex>`\ 。
 :return: 原子の種類（元素記号）
 :rtype: str

 .. code-block:: python
  :caption: 例

  >>> nanolabo.get_atom_name("SiC", 0)
  'Si'

.. py:function:: get_atom_xyz(path, index)

 原子の座標を取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param int index: 原子を通し番号で指定します。番号は0から数えます\ :ref:`*<pynoteindex>`\ 。
 :return: 原子の座標(\ |angs|\ )、および各方向に固定(0)か可動(1)か
 :rtype: [list[float], list[int]]

 .. code-block:: python
  :caption: 例

  >>> nanolabo.get_atom_xyz("SiC", 0)
  [[1.5019770000000001, 2.1822290000000004, 3.2716700000000007], [1, 1, 1]]

.. py:function:: set_atom_name(path, index, name)

 原子の種類を設定します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param int index: 原子を通し番号で指定します。番号は0から数えます\ :ref:`*<pynoteindex>`\ 。
 :param str name: 設定する原子の種類を元素記号で指定します。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.set_atom_name("SiC", 0, "C")

.. py:function:: set_atom_xyz(path, index, x, y, z, [xfix=1], [yfix=1], [zfix=1])

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param int index: 原子を通し番号で指定します。番号は0から数えます\ :ref:`*<pynoteindex>`\ 。
 :param float x, y, z: x, y, z座標(\ |angs|\ )を指定します。
 :param int xfix, yfix, zfix: x, y, z方向に固定(0)か可動(1)か。省略した場合可動(1)になります。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.set_atom_xyz("SiC", 0, 0.5, 0.5, 0.5, 0, 0, 0)  #全方向固定

  >>> nanolabo.set_atom_xyz("SiC", 0, 0.5, 0.5, 0.5, zfix=0)   #xy方向は可動、z方向のみ固定

.. _pynoteindex:

.. note::

 :guilabel:`Geometry`\ |rarr|\ :guilabel:`Atoms`\ の番号(#)は1から数えるので、indexとは1つずれます（順序は同じです）。

Quantum ESPRESSO関連操作
---------------------------

.. py:function:: qe_get_kpoints(path)

 SCF計算のk点の数を取得します。詳細は\ `Quantum ESPRESSOのマニュアル <https://www.quantum-espresso.org/Doc/INPUT_PW.html>`_\ (K_POINTS automatic)を参照してください。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :return: 各方向のk点数と、オフセットを適用する(1)かしない(0)かの設定
 :rtype: list[list[int]]

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_get_kpoints("SiC")
  [[4, 4, 2], [0, 0, 0]]

.. py:function:: qe_set_kpoints(path, nk1, nk2, nk3, sk1, sk2, sk3)

 SCF計算のk点の数を設定します。詳細は\ `Quantum ESPRESSOのマニュアル <https://www.quantum-espresso.org/Doc/INPUT_PW.html>`_\ (K_POINTS automatic)を参照してください。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param int nk1, nk2, nk3: k点分割数
 :param int sk1, sk2, sk3: オフセットを適用する(1)かしない(0)か

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_set_kpoints("SiC", 4, 4, 2, 0, 0, 0)

.. py:function:: qe_get_mass(path, name)

 元素に設定された質量\ :ref:`**<pynotemass>`\ を取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str name: 元素を元素記号で指定します。
 :return: 元素の質量（原子質量単位）
 :rtype: float

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_get_mass("SiC", "Si")
  28.0855

.. py:function:: qe_set_mass(path, name, mass)

 元素の質量\ :ref:`**<pynotemass>`\ を設定します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str name: 元素を元素記号で指定します。
 :param float mass: 元素の質量（原子質量単位）を指定します。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_set_mass("SiC", "Si", 28.0855)

.. _pynotemass:

.. note::

 元素の質量の設定は計算エンジンごとに独立しています。

.. py:function:: qe_get_pseudo(path, name)

 元素に設定された擬ポテンシャルを取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str name: 元素を元素記号で指定します。
 :return: 擬ポテンシャルのファイル名
 :rtype: str

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_get_pseudo("SiC", "Si")
  'Si.pbe-rrkj.UPF'

.. py:function:: qe_set_pseudo(path, name, pseudo)

 元素の擬ポテンシャルを設定します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :param str name: 元素を元素記号で指定します。
 :param str pseudo: 擬ポテンシャルをファイル名で指定します。

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_set_pseudo("SiC", "Si", "Si.pbe-rrkj.UPF")

.. py:function:: qe_get_total_energy(path)

 SCF計算で得られた全エネルギーを取得します。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :return: SCF計算が収束している(1)かしていない(0)か、および全エネルギーの値(Ry)
 :rtype: [int, float]

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_get_total_energy("SiC")
  [1, -38.43756505]

.. py:function:: qe_get_geometry(path)

 第一原理構造最適化計算で得られた原子構造の情報をファイル :file:`ホームディレクトリ/.nanolabo/.tmp_inquiry` に出力します。ファイルは\ :py:func:`set_all_atoms`\ で読み込ませることができます。

 :param str path: プロジェクトをフォルダの絶対パスで指定します。デフォルトの保存先にあるプロジェクトは、プロジェクト名だけで指定できます。
 :return: 構造最適化が収束しているかどうか
 :rtype: bool

 .. code-block:: python
  :caption: 例

  >>> nanolabo.qe_get_geometry("SiC")
  True

.. |angs| raw:: html

   &#8491;

.. |rarr| raw:: html

   &rarr;
