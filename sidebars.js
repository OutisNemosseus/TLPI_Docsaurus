/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Source Code',
      collapsed: false,
      items: [
          {
                'type': 'category',
                'label': 'Acl',
                'items': [
                      'acl/acl_update-c',
                      'acl/acl_view-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Altio',
                'items': [
                      'altio/demo_sigio-c',
                      'altio/epoll_flags_fork-c',
                      'altio/epoll_input-c',
                      'altio/multithread_epoll_wait-c',
                      'altio/poll_pipes-c',
                      'altio/select_mq-c',
                      'altio/self_pipe-c',
                      'altio/t_select-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Cap',
                'items': [
                      'cap/cap_functions-c',
                      'cap/cap_functions-h',
                      'cap/cap_launcher-c',
                      'cap/cap_text-c',
                      'cap/check_password_caps-c',
                      'cap/demo_file_caps-c',
                      'cap/show_secbits-c',
                      'cap/t_cap_get_file-c',
                      'cap/t_cap_get_pid-c',
                      'cap/t_cap_set_file-c',
                      'cap/view_cap_xattr-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Cgroups',
                'items': [
                      'cgroups/alloc_mem-c',
                      'cgroups/fork_bomb_simple-c',
                      'cgroups/fork_bomb-c',
                      'cgroups/move_rt_tasks_to_cgroup_root-sh',
                      'cgroups/remove_cgroup_hier-sh'
                ]
          },
          {
                'type': 'category',
                'label': 'Consh',
                'items': [
                      'consh/consh_cleanup-sh',
                      'consh/consh_nw_setup-sh',
                      'consh/consh_post_setup-sh',
                      'consh/consh_setup-sh',
                      'consh/copy_scripts_and_unshare-sh',
                      'consh/create_lowerfs-sh'
                ]
          },
          {
                'type': 'category',
                'label': 'Daemons',
                'items': [
                      'daemons/become_daemon-c',
                      'daemons/become_daemon-h',
                      'daemons/daemon_sighup-c',
                      'daemons/t_syslog-c',
                      'daemons/test_become_daemon-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Dirs links',
                'items': [
                      'dirs_links/bad_symlink-c',
                      'dirs_links/file_type_stats-c',
                      'dirs_links/list_files_readdir_r-c',
                      'dirs_links/list_files-c',
                      'dirs_links/nftw_dir_tree-c',
                      'dirs_links/t_dirbasename-c',
                      'dirs_links/t_unlink-c',
                      'dirs_links/view_symlink-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Filebuff',
                'items': [
                      'filebuff/copy-c',
                      'filebuff/direct_read-c',
                      'filebuff/mix23_linebuff-c',
                      'filebuff/mix23io-c',
                      'filebuff/write_bytes-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Fileio',
                'items': [
                      'fileio/atomic_append-c',
                      'fileio/bad_exclusive_open-c',
                      'fileio/copy-c',
                      'fileio/large_file-c',
                      'fileio/multi_descriptors-c',
                      'fileio/seek_io-c',
                      'fileio/t_readv-c',
                      'fileio/t_truncate-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Filelock',
                'items': [
                      'filelock/create_pid_file-c',
                      'filelock/create_pid_file-h',
                      'filelock/i_fcntl_locking-c',
                      'filelock/region_locking-c',
                      'filelock/region_locking-h',
                      'filelock/t_flock-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Files',
                'items': [
                      'files/chiflag-c',
                      'files/file_perms-c',
                      'files/file_perms-h',
                      'files/t_chown-c',
                      'files/t_stat-c',
                      'files/t_umask-c',
                      'files/t_utime-c',
                      'files/t_utimes-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Filesys',
                'items': [
                      'filesys/overlayfs_example-sh',
                      'filesys/t_mount-c',
                      'filesys/t_statfs-c',
                      'filesys/t_statvfs-c',
                      'filesys/t_umount-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Getopt',
                'items': [
                      'getopt/t_getopt-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Inotify',
                'items': [
                      'inotify/demo_inotify-c',
                      'inotify/dnotify-c',
                      'inotify/inotify_dtree-c',
                      'inotify/rand_dtree-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Lib',
                'items': [
                      'lib/alt_functions-c',
                      'lib/alt_functions-h',
                      'lib/become_daemon-c',
                      'lib/become_daemon-h',
                      'lib/binary_sems-c',
                      'lib/binary_sems-h',
                      'lib/build_ename-sh',
                      'lib/cap_functions-c',
                      'lib/cap_functions-h',
                      'lib/create_pid_file-c',
                      'lib/create_pid_file-h',
                      'lib/curr_time-c',
                      'lib/curr_time-h',
                      'lib/error_functions-c',
                      'lib/error_functions-h',
                      'lib/event_flags-c',
                      'lib/event_flags-h',
                      'lib/file_perms-c',
                      'lib/file_perms-h',
                      'lib/get_num-c',
                      'lib/get_num-h',
                      'lib/inet_sockets-c',
                      'lib/inet_sockets-h',
                      'lib/itimerspec_from_str-c',
                      'lib/itimerspec_from_str-h',
                      'lib/print_rlimit-c',
                      'lib/print_rlimit-h',
                      'lib/print_rusage-c',
                      'lib/print_rusage-h',
                      'lib/print_wait_status-c',
                      'lib/print_wait_status-h',
                      'lib/pty_fork-c',
                      'lib/pty_fork-h',
                      'lib/pty_master_open-c',
                      'lib/pty_master_open-h',
                      'lib/rdwrn-c',
                      'lib/rdwrn-h',
                      'lib/read_line_buf-c',
                      'lib/read_line_buf-h',
                      'lib/read_line-c',
                      'lib/read_line-h',
                      'lib/region_locking-c',
                      'lib/region_locking-h',
                      'lib/scm_functions-c',
                      'lib/scm_functions-h',
                      'lib/semun-h',
                      'lib/signal_functions-c',
                      'lib/signal_functions-h',
                      'lib/signal-c',
                      'lib/tlpi_hdr-h',
                      'lib/tty_functions-c',
                      'lib/tty_functions-h',
                      'lib/ugid_functions-c',
                      'lib/ugid_functions-h',
                      'lib/unix_sockets-c',
                      'lib/unix_sockets-h',
                      'lib/userns_functions-c',
                      'lib/userns_functions-h'
                ]
          },
          {
                'type': 'category',
                'label': 'Loginacct',
                'items': [
                      'loginacct/dump_utmpx-c',
                      'loginacct/utmpx_login-c',
                      'loginacct/view_lastlog-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Memalloc',
                'items': [
                      'memalloc/free_and_sbrk-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Mmap',
                'items': [
                      'mmap/anon_mmap-c',
                      'mmap/mmcat-c',
                      'mmap/mmcopy-c',
                      'mmap/t_mmap-c',
                      'mmap/t_remap_file_pages-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Namespaces',
                'items': [
                      'namespaces/cred_launcher-c',
                      'namespaces/demo_userns-c',
                      'namespaces/demo_uts_namespaces-c',
                      'namespaces/hostname-c',
                      'namespaces/multi_pidns-c',
                      'namespaces/ns_capable-c',
                      'namespaces/ns_child_exec-c',
                      'namespaces/ns_exec-c',
                      'namespaces/ns_run-c',
                      'namespaces/orphan-c',
                      'namespaces/pidns_init_sleep-c',
                      'namespaces/show_creds-c',
                      'namespaces/simple_init-c',
                      'namespaces/t_setns_userns-c',
                      'namespaces/unshare-c',
                      'namespaces/userns_child_exec-c',
                      'namespaces/userns_functions-c',
                      'namespaces/userns_functions-h',
                      'namespaces/userns_setns_test-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Pgsjc',
                'items': [
                      'pgsjc/catch_sighup-c',
                      'pgsjc/disc_sighup-c',
                      'pgsjc/handling_sigtstp-c',
                      'pgsjc/job_mon-c',
                      'pgsjc/orphaned_pgrp_sighup-c',
                      'pgsjc/t_setsid-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Pipes',
                'items': [
                      'pipes/change_case-c',
                      'pipes/fifo_seqnum_client-c',
                      'pipes/fifo_seqnum_server-c',
                      'pipes/fifo_seqnum-h',
                      'pipes/pipe_ls_wc-c',
                      'pipes/pipe_sync-c',
                      'pipes/popen_glob-c',
                      'pipes/simple_pipe-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Pmsg',
                'items': [
                      'pmsg/mq_notify_sig-c',
                      'pmsg/mq_notify_siginfo-c',
                      'pmsg/mq_notify_sigwaitinfo-c',
                      'pmsg/mq_notify_thread-c',
                      'pmsg/mq_notify_via_signal-c',
                      'pmsg/mq_notify_via_thread-c',
                      'pmsg/pmsg_create-c',
                      'pmsg/pmsg_getattr-c',
                      'pmsg/pmsg_receive-c',
                      'pmsg/pmsg_send-c',
                      'pmsg/pmsg_unlink-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Proc',
                'items': [
                      'proc/bad_longjmp-c',
                      'proc/display_env-c',
                      'proc/longjmp-c',
                      'proc/mem_segments-c',
                      'proc/modify_env-c',
                      'proc/necho-c',
                      'proc/setenv-c',
                      'proc/setjmp_vars-c',
                      'proc/t_getenv-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Proccred',
                'items': [
                      'proccred/idshow-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Procexec',
                'items': [
                      'procexec/acct_on-c',
                      'procexec/acct_v3_view-c',
                      'procexec/acct_view-c',
                      'procexec/child_status-c',
                      'procexec/closeonexec-c',
                      'procexec/demo_clone-c',
                      'procexec/envargs-c',
                      'procexec/execlp-c',
                      'procexec/exit_handlers-c',
                      'procexec/footprint-c',
                      'procexec/fork_file_sharing-c',
                      'procexec/fork_sig_sync-c',
                      'procexec/fork_stdio_buf-c',
                      'procexec/fork_whos_on_first-c',
                      'procexec/make_zombie-c',
                      'procexec/multi_sigchld-c',
                      'procexec/multi_wait-c',
                      'procexec/necho-c',
                      'procexec/orphan-c',
                      'procexec/pdeath_signal-c',
                      'procexec/print_wait_status-c',
                      'procexec/print_wait_status-h',
                      'procexec/simple_system-c',
                      'procexec/system-c',
                      'procexec/t_clone-c',
                      'procexec/t_execl-c',
                      'procexec/t_execle-c',
                      'procexec/t_execlp-c',
                      'procexec/t_execve-c',
                      'procexec/t_fork-c',
                      'procexec/t_system-c',
                      'procexec/t_vfork-c',
                      'procexec/vfork_fd_test-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Procpri',
                'items': [
                      'procpri/demo_sched_fifo-c',
                      'procpri/sched_set-c',
                      'procpri/sched_view-c',
                      'procpri/t_sched_getaffinity-c',
                      'procpri/t_sched_setaffinity-c',
                      'procpri/t_setpriority-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Procres',
                'items': [
                      'procres/print_rlimit-c',
                      'procres/print_rlimit-h',
                      'procres/print_rusage-c',
                      'procres/print_rusage-h',
                      'procres/rlimit_nproc-c',
                      'procres/rusage_wait-c',
                      'procres/rusage-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Progconc',
                'items': [
                      'progconc/syscall_speed-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Psem',
                'items': [
                      'psem/psem_create-c',
                      'psem/psem_getvalue-c',
                      'psem/psem_post-c',
                      'psem/psem_timedwait-c',
                      'psem/psem_trywait-c',
                      'psem/psem_unlink-c',
                      'psem/psem_wait-c',
                      'psem/thread_incr_psem-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Pshm',
                'items': [
                      'pshm/pshm_create-c',
                      'pshm/pshm_read-c',
                      'pshm/pshm_unlink-c',
                      'pshm/pshm_write-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Pty',
                'items': [
                      'pty/pty_fork-c',
                      'pty/pty_fork-h',
                      'pty/pty_master_open_bsd-c',
                      'pty/pty_master_open-c',
                      'pty/pty_master_open-h',
                      'pty/script-c',
                      'pty/unbuffer-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Seccomp',
                'items': [
                      'seccomp/dump_seccomp_filter-c',
                      'seccomp/libseccomp_demo-c',
                      'seccomp/seccomp_arg64-c',
                      'seccomp/seccomp_control_open-c',
                      'seccomp/seccomp_deny_open-c',
                      'seccomp/seccomp_launch-c',
                      'seccomp/seccomp_logging-c',
                      'seccomp/seccomp_multiarch-c',
                      'seccomp/seccomp_perf-c',
                      'seccomp/seccomp_trap_sigsys-c',
                      'seccomp/seccomp_user_notification-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs',
                'items': [
                      'shlibs/demo_no_lib-sh',
                      'shlibs/demo_shared_lib-sh',
                      'shlibs/demo_static_lib-sh',
                      'shlibs/dynload-c',
                      'shlibs/mod1-c',
                      'shlibs/mod2-c',
                      'shlibs/mod3-c',
                      'shlibs/prog-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs\\demo Bsymbolic',
                'items': [
                      'shlibs\\demo_Bsymbolic/build-sh',
                      'shlibs\\demo_Bsymbolic/foo1-c',
                      'shlibs\\demo_Bsymbolic/foo2-c',
                      'shlibs\\demo_Bsymbolic/foo3-c',
                      'shlibs\\demo_Bsymbolic/prog-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs\\rpath demo',
                'items': [
                      'shlibs\\rpath_demo/build-rpath-link-sh',
                      'shlibs\\rpath_demo/build-sh',
                      'shlibs\\rpath_demo/prog-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs\\rpath demo\\d1',
                'items': [
                      'shlibs\\rpath_demo\\d1/modx1-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs\\rpath demo\\d2',
                'items': [
                      'shlibs\\rpath_demo\\d2/modx2-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs\\version scripts',
                'items': [
                      'shlibs\\version_scripts/sv_build-sh',
                      'shlibs\\version_scripts/sv_lib_v1-c',
                      'shlibs\\version_scripts/sv_lib_v2-c',
                      'shlibs\\version_scripts/sv_libabc-c',
                      'shlibs\\version_scripts/sv_prog_abc-c',
                      'shlibs\\version_scripts/sv_prog_complex-c',
                      'shlibs\\version_scripts/sv_prog-c',
                      'shlibs\\version_scripts/vis_build-sh',
                      'shlibs\\version_scripts/vis_comm-c',
                      'shlibs\\version_scripts/vis_f1-c',
                      'shlibs\\version_scripts/vis_f2-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Signals',
                'items': [
                      'signals/catch_rtsigs-c',
                      'signals/demo_sigfpe-c',
                      'signals/ignore_pending_sig-c',
                      'signals/intquit-c',
                      'signals/nonreentrant-c',
                      'signals/ouch-c',
                      'signals/sig_receiver-c',
                      'signals/sig_sender-c',
                      'signals/sig_speed_sigsuspend-c',
                      'signals/siginterrupt-c',
                      'signals/sigmask_longjmp-c',
                      'signals/signal_functions-c',
                      'signals/signal_functions-h',
                      'signals/signal-c',
                      'signals/signalfd_sigval-c',
                      'signals/t_kill-c',
                      'signals/t_sigaltstack-c',
                      'signals/t_sigqueue-c',
                      'signals/t_sigsuspend-c',
                      'signals/t_sigwaitinfo-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Sockets',
                'items': [
                      'sockets/i6d_ucase_cl-c',
                      'sockets/i6d_ucase_sv-c',
                      'sockets/i6d_ucase-h',
                      'sockets/id_echo_cl-c',
                      'sockets/id_echo_sv-c',
                      'sockets/id_echo-h',
                      'sockets/inet_sockets-c',
                      'sockets/inet_sockets-h',
                      'sockets/is_echo_cl-c',
                      'sockets/is_echo_inetd_sv-c',
                      'sockets/is_echo_sv-c',
                      'sockets/is_echo_v2_sv-c',
                      'sockets/is_seqnum_cl-c',
                      'sockets/is_seqnum_sv-c',
                      'sockets/is_seqnum_v2_cl-c',
                      'sockets/is_seqnum_v2_sv-c',
                      'sockets/is_seqnum_v2-h',
                      'sockets/is_seqnum-h',
                      'sockets/list_host_addresses-c',
                      'sockets/rdwrn-c',
                      'sockets/rdwrn-h',
                      'sockets/read_line_buf-c',
                      'sockets/read_line_buf-h',
                      'sockets/read_line-c',
                      'sockets/read_line-h',
                      'sockets/scm_cred_recv-c',
                      'sockets/scm_cred_send-c',
                      'sockets/scm_cred-h',
                      'sockets/scm_functions-c',
                      'sockets/scm_functions-h',
                      'sockets/scm_multi_recv-c',
                      'sockets/scm_multi_send-c',
                      'sockets/scm_multi-h',
                      'sockets/scm_rights_recv-c',
                      'sockets/scm_rights_send-c',
                      'sockets/scm_rights-h',
                      'sockets/sendfile-c',
                      'sockets/socknames-c',
                      'sockets/t_gethostbyname-c',
                      'sockets/t_getservbyname-c',
                      'sockets/ud_ucase_cl-c',
                      'sockets/ud_ucase_sv-c',
                      'sockets/ud_ucase-h',
                      'sockets/unix_sockets-c',
                      'sockets/unix_sockets-h',
                      'sockets/us_abstract_bind-c',
                      'sockets/us_xfr_cl-c',
                      'sockets/us_xfr_sv-c',
                      'sockets/us_xfr_v2_cl-c',
                      'sockets/us_xfr_v2_sv-c',
                      'sockets/us_xfr_v2-h',
                      'sockets/us_xfr-h'
                ]
          },
          {
                'type': 'category',
                'label': 'Svipc',
                'items': [
                      'svipc/svmsg_demo_server-c',
                      'svipc/t_ftok-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Svmsg',
                'items': [
                      'svmsg/svmsg_chqbytes-c',
                      'svmsg/svmsg_create-c',
                      'svmsg/svmsg_file_client-c',
                      'svmsg/svmsg_file_server-c',
                      'svmsg/svmsg_file-h',
                      'svmsg/svmsg_info-c',
                      'svmsg/svmsg_ls-c',
                      'svmsg/svmsg_receive-c',
                      'svmsg/svmsg_rm-c',
                      'svmsg/svmsg_send-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Svsem',
                'items': [
                      'svsem/binary_sems-c',
                      'svsem/binary_sems-h',
                      'svsem/event_flags-c',
                      'svsem/event_flags-h',
                      'svsem/semun-h',
                      'svsem/svsem_bad_init-c',
                      'svsem/svsem_create-c',
                      'svsem/svsem_demo-c',
                      'svsem/svsem_good_init-c',
                      'svsem/svsem_info-c',
                      'svsem/svsem_mon-c',
                      'svsem/svsem_op-c',
                      'svsem/svsem_rm-c',
                      'svsem/svsem_setall-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Svshm',
                'items': [
                      'svshm/svshm_attach-c',
                      'svshm/svshm_create-c',
                      'svshm/svshm_info-c',
                      'svshm/svshm_lock-c',
                      'svshm/svshm_mon-c',
                      'svshm/svshm_rm-c',
                      'svshm/svshm_unlock-c',
                      'svshm/svshm_xfr_reader-c',
                      'svshm/svshm_xfr_writer-c',
                      'svshm/svshm_xfr-h'
                ]
          },
          {
                'type': 'category',
                'label': 'Sysinfo',
                'items': [
                      'sysinfo/procfs_pidmax-c',
                      'sysinfo/procfs_user_exe-c',
                      'sysinfo/t_uname-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Syslim',
                'items': [
                      'syslim/t_fpathconf-c',
                      'syslim/t_sysconf-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Threads',
                'items': [
                      'threads/detached_attrib-c',
                      'threads/one_time_init-c',
                      'threads/prod_condvar-c',
                      'threads/prod_no_condvar-c',
                      'threads/pthread_barrier_demo-c',
                      'threads/simple_thread-c',
                      'threads/strerror_test-c',
                      'threads/strerror_tls-c',
                      'threads/strerror_tsd-c',
                      'threads/strerror-c',
                      'threads/thread_cancel-c',
                      'threads/thread_cleanup-c',
                      'threads/thread_incr_mutex-c',
                      'threads/thread_incr_rwlock-c',
                      'threads/thread_incr_spinlock-c',
                      'threads/thread_incr-c',
                      'threads/thread_lock_speed-c',
                      'threads/thread_multijoin-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Time',
                'items': [
                      'time/calendar_time-c',
                      'time/curr_time-c',
                      'time/curr_time-h',
                      'time/process_time-c',
                      'time/show_time-c',
                      'time/strtime-c',
                      'time/t_stime-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Timers',
                'items': [
                      'timers/cpu_burner-c',
                      'timers/cpu_multi_burner-c',
                      'timers/cpu_multithread_burner-c',
                      'timers/demo_timerfd-c',
                      'timers/itimerspec_from_str-c',
                      'timers/itimerspec_from_str-h',
                      'timers/ptmr_null_evp-c',
                      'timers/ptmr_sigev_signal-c',
                      'timers/ptmr_sigev_thread-c',
                      'timers/real_timer-c',
                      'timers/t_clock_nanosleep-c',
                      'timers/t_nanosleep-c',
                      'timers/timed_read-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Tty',
                'items': [
                      'tty/demo_sigwinch-c',
                      'tty/new_intr-c',
                      'tty/no_echo-c',
                      'tty/test_tty_functions-c',
                      'tty/tty_functions-c',
                      'tty/tty_functions-h',
                      'tty/ttyname-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Users groups',
                'items': [
                      'users_groups/check_password-c',
                      'users_groups/t_getpwent-c',
                      'users_groups/t_getpwnam_r-c',
                      'users_groups/ugid_functions-c',
                      'users_groups/ugid_functions-h'
                ]
          },
          {
                'type': 'category',
                'label': 'Vdso',
                'items': [
                      'vdso/gettimeofday-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Vmem',
                'items': [
                      'vmem/madvise_dontneed-c',
                      'vmem/memlock-c',
                      'vmem/t_mprotect-c'
                ]
          },
          {
                'type': 'category',
                'label': 'Xattr',
                'items': [
                      'xattr/t_setxattr-c',
                      'xattr/xattr_view-c'
                ]
          }
    ]
    }
  ],
};

module.exports = sidebars;
