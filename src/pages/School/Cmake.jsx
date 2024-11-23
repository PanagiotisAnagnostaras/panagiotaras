import '../page.css'
let Cmake = () => {
    return (<div>
        <h2>CMake School</h2>

        <h3>Tagets</h3>
        <p>
            Targets represent executables, libraries, and utilities built by CMake. Every add_library, add_executable, and add_custom_target command creates a target.<br />
            add_library(foo STATIC foo1.c foo2.c): Will create a target named "foo" that is a static library, with foo1.c and foo2.c as source files.
        </p>
        <h3>cmake ..</h3>
        <p>cmake is a Makefile generator.
            When you call cmake [path], you ask it to generate a Makefile in the current directory following instructions given in [path]/CMakeLists.txt
            Usually cmake output some messages while it is working, and after it is done without errors, you can type "make" to execute your newly created Makefile.</p>
        <h3>Libraries</h3>
        <p>
            Libraries can be declared as a particular type such as STATIC, SHARED, MODULE, or left undeclared. STATIC indicates that the library must be built as a static library.
            Likewise, SHARED indicates it must be built as a shared library. MODULE indicates that the library must be created so that it can be dynamically-loaded into an executable.
            Module libraries are implemented as shared libraries on many platforms, but not all. Therefore, CMake does not allow other targets to link to modules.
            If none of these options are specified, it indicates that the library could be built as either shared or static. In that case, CMake uses the setting of the variable BUILD_SHARED_LIBS to determine if the library should be SHARED or STATIC.
            If it is not set, then CMake defaults to building static libraries.
        </p>
        <h3>Packages</h3>
        <p></p>
        <h3>find_package</h3>
        <p></p>
        <h3>add_executable</h3>
        <p></p>
        <h3>target_link_libraries</h3>
        <p>
            Usage: target_link_libraries(target ... item... ...) <br />
            The named target must have been created by a command such as add_executable() or add_library() and must not be an ALIAS target.
            Each &lt item &gt may be:
            <ul>
                <item /> A library target name
                <item /> A full path to a library file
            </ul>
        </p>
        <h3>target_include_directories</h3>
        <p></p>
        <h3>CLI commands</h3>
        <h3>cmake</h3>
        <p></p>
        <h3>make</h3>
        <p></p>
        <h3>Makefile</h3>
        <p></p>

    </div>)
}

export default Cmake;