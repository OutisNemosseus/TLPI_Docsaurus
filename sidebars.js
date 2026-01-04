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
                      'acl/acl_update-c/index',
                      'acl/acl_view-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Altio',
                'items': [
                      'altio/demo_sigio-c/index',
                      'altio/epoll_flags_fork-c/index',
                      'altio/epoll_input-c/index',
                      'altio/multithread_epoll_wait-c/index',
                      'altio/poll_pipes-c/index',
                      'altio/select_mq-c/index',
                      'altio/self_pipe-c/index',
                      'altio/t_select-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Cap',
                'items': [
                      'cap/cap_functions-c/index',
                      'cap/cap_functions-h/index',
                      'cap/cap_launcher-c/index',
                      'cap/cap_text-c/index',
                      'cap/check_password_caps-c/index',
                      'cap/demo_file_caps-c/index',
                      'cap/show_secbits-c/index',
                      'cap/t_cap_get_file-c/index',
                      'cap/t_cap_get_pid-c/index',
                      'cap/t_cap_set_file-c/index',
                      'cap/view_cap_xattr-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Cgroups',
                'items': [
                      'cgroups/alloc_mem-c/index',
                      'cgroups/fork_bomb_simple-c/index',
                      'cgroups/fork_bomb-c/index',
                      'cgroups/move_rt_tasks_to_cgroup_root-sh/index',
                      'cgroups/remove_cgroup_hier-sh/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Consh',
                'items': [
                      'consh/consh_cleanup-sh/index',
                      'consh/consh_nw_setup-sh/index',
                      'consh/consh_post_setup-sh/index',
                      'consh/consh_setup-sh/index',
                      'consh/copy_scripts_and_unshare-sh/index',
                      'consh/create_lowerfs-sh/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Daemons',
                'items': [
                      'daemons/become_daemon-c/index',
                      'daemons/become_daemon-h/index',
                      'daemons/daemon_sighup-c/index',
                      'daemons/t_syslog-c/index',
                      'daemons/test_become_daemon-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Dirs links',
                'items': [
                      'dirs_links/bad_symlink-c/index',
                      'dirs_links/file_type_stats-c/index',
                      'dirs_links/list_files_readdir_r-c/index',
                      'dirs_links/list_files-c/index',
                      'dirs_links/nftw_dir_tree-c/index',
                      'dirs_links/t_dirbasename-c/index',
                      'dirs_links/t_unlink-c/index',
                      'dirs_links/view_symlink-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Filebuff',
                'items': [
                      'filebuff/copy-c/index',
                      'filebuff/direct_read-c/index',
                      'filebuff/mix23_linebuff-c/index',
                      'filebuff/mix23io-c/index',
                      'filebuff/write_bytes-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Fileio',
                'items': [
                      'fileio/atomic_append-c/index',
                      'fileio/bad_exclusive_open-c/index',
                      'fileio/copy-c/index',
                      'fileio/large_file-c/index',
                      'fileio/multi_descriptors-c/index',
                      'fileio/seek_io-c/index',
                      'fileio/t_readv-c/index',
                      'fileio/t_truncate-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Filelock',
                'items': [
                      'filelock/create_pid_file-c/index',
                      'filelock/create_pid_file-h/index',
                      'filelock/i_fcntl_locking-c/index',
                      'filelock/region_locking-c/index',
                      'filelock/region_locking-h/index',
                      'filelock/t_flock-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Files',
                'items': [
                      'files/chiflag-c/index',
                      'files/file_perms-c/index',
                      'files/file_perms-h/index',
                      'files/t_chown-c/index',
                      'files/t_stat-c/index',
                      'files/t_umask-c/index',
                      'files/t_utime-c/index',
                      'files/t_utimes-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Filesys',
                'items': [
                      'filesys/overlayfs_example-sh/index',
                      'filesys/t_mount-c/index',
                      'filesys/t_statfs-c/index',
                      'filesys/t_statvfs-c/index',
                      'filesys/t_umount-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Getopt',
                'items': [
                      'getopt/t_getopt-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Inotify',
                'items': [
                      'inotify/demo_inotify-c/index',
                      'inotify/dnotify-c/index',
                      'inotify/inotify_dtree-c/index',
                      'inotify/rand_dtree-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Lib',
                'items': [
                      'lib/alt_functions-c/index',
                      'lib/alt_functions-h/index',
                      'lib/become_daemon-c/index',
                      'lib/become_daemon-h/index',
                      'lib/binary_sems-c/index',
                      'lib/binary_sems-h/index',
                      'lib/build_ename-sh/index',
                      'lib/cap_functions-c/index',
                      'lib/cap_functions-h/index',
                      'lib/create_pid_file-c/index',
                      'lib/create_pid_file-h/index',
                      'lib/curr_time-c/index',
                      'lib/curr_time-h/index',
                      'lib/error_functions-c/index',
                      'lib/error_functions-h/index',
                      'lib/event_flags-c/index',
                      'lib/event_flags-h/index',
                      'lib/file_perms-c/index',
                      'lib/file_perms-h/index',
                      'lib/get_num-c/index',
                      'lib/get_num-h/index',
                      'lib/inet_sockets-c/index',
                      'lib/inet_sockets-h/index',
                      'lib/itimerspec_from_str-c/index',
                      'lib/itimerspec_from_str-h/index',
                      'lib/print_rlimit-c/index',
                      'lib/print_rlimit-h/index',
                      'lib/print_rusage-c/index',
                      'lib/print_rusage-h/index',
                      'lib/print_wait_status-c/index',
                      'lib/print_wait_status-h/index',
                      'lib/pty_fork-c/index',
                      'lib/pty_fork-h/index',
                      'lib/pty_master_open-c/index',
                      'lib/pty_master_open-h/index',
                      'lib/rdwrn-c/index',
                      'lib/rdwrn-h/index',
                      'lib/read_line_buf-c/index',
                      'lib/read_line_buf-h/index',
                      'lib/read_line-c/index',
                      'lib/read_line-h/index',
                      'lib/region_locking-c/index',
                      'lib/region_locking-h/index',
                      'lib/scm_functions-c/index',
                      'lib/scm_functions-h/index',
                      'lib/semun-h/index',
                      'lib/signal_functions-c/index',
                      'lib/signal_functions-h/index',
                      'lib/signal-c/index',
                      'lib/tlpi_hdr-h/index',
                      'lib/tty_functions-c/index',
                      'lib/tty_functions-h/index',
                      'lib/ugid_functions-c/index',
                      'lib/ugid_functions-h/index',
                      'lib/unix_sockets-c/index',
                      'lib/unix_sockets-h/index',
                      'lib/userns_functions-c/index',
                      'lib/userns_functions-h/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Loginacct',
                'items': [
                      'loginacct/dump_utmpx-c/index',
                      'loginacct/utmpx_login-c/index',
                      'loginacct/view_lastlog-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Memalloc',
                'items': [
                      'memalloc/free_and_sbrk-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Mmap',
                'items': [
                      'mmap/anon_mmap-c/index',
                      'mmap/mmcat-c/index',
                      'mmap/mmcopy-c/index',
                      'mmap/t_mmap-c/index',
                      'mmap/t_remap_file_pages-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Namespaces',
                'items': [
                      'namespaces/cred_launcher-c/index',
                      'namespaces/demo_userns-c/index',
                      'namespaces/demo_uts_namespaces-c/index',
                      'namespaces/hostname-c/index',
                      'namespaces/multi_pidns-c/index',
                      'namespaces/ns_capable-c/index',
                      'namespaces/ns_child_exec-c/index',
                      'namespaces/ns_exec-c/index',
                      'namespaces/ns_run-c/index',
                      'namespaces/orphan-c/index',
                      'namespaces/pidns_init_sleep-c/index',
                      'namespaces/show_creds-c/index',
                      'namespaces/simple_init-c/index',
                      'namespaces/t_setns_userns-c/index',
                      'namespaces/unshare-c/index',
                      'namespaces/userns_child_exec-c/index',
                      'namespaces/userns_functions-c/index',
                      'namespaces/userns_functions-h/index',
                      'namespaces/userns_setns_test-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Pgsjc',
                'items': [
                      'pgsjc/catch_sighup-c/index',
                      'pgsjc/disc_sighup-c/index',
                      'pgsjc/handling_sigtstp-c/index',
                      'pgsjc/job_mon-c/index',
                      'pgsjc/orphaned_pgrp_sighup-c/index',
                      'pgsjc/t_setsid-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Pipes',
                'items': [
                      'pipes/change_case-c/index',
                      'pipes/fifo_seqnum_client-c/index',
                      'pipes/fifo_seqnum_server-c/index',
                      'pipes/fifo_seqnum-h/index',
                      'pipes/pipe_ls_wc-c/index',
                      'pipes/pipe_sync-c/index',
                      'pipes/popen_glob-c/index',
                      'pipes/simple_pipe-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Pmsg',
                'items': [
                      'pmsg/mq_notify_sig-c/index',
                      'pmsg/mq_notify_siginfo-c/index',
                      'pmsg/mq_notify_sigwaitinfo-c/index',
                      'pmsg/mq_notify_thread-c/index',
                      'pmsg/mq_notify_via_signal-c/index',
                      'pmsg/mq_notify_via_thread-c/index',
                      'pmsg/pmsg_create-c/index',
                      'pmsg/pmsg_getattr-c/index',
                      'pmsg/pmsg_receive-c/index',
                      'pmsg/pmsg_send-c/index',
                      'pmsg/pmsg_unlink-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Proc',
                'items': [
                      'proc/bad_longjmp-c/index',
                      'proc/display_env-c/index',
                      'proc/longjmp-c/index',
                      'proc/mem_segments-c/index',
                      'proc/modify_env-c/index',
                      'proc/necho-c/index',
                      'proc/setenv-c/index',
                      'proc/setjmp_vars-c/index',
                      'proc/t_getenv-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Proccred',
                'items': [
                      'proccred/idshow-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Procexec',
                'items': [
                      'procexec/acct_on-c/index',
                      'procexec/acct_v3_view-c/index',
                      'procexec/acct_view-c/index',
                      'procexec/child_status-c/index',
                      'procexec/closeonexec-c/index',
                      'procexec/demo_clone-c/index',
                      'procexec/envargs-c/index',
                      'procexec/execlp-c/index',
                      'procexec/exit_handlers-c/index',
                      'procexec/footprint-c/index',
                      'procexec/fork_file_sharing-c/index',
                      'procexec/fork_sig_sync-c/index',
                      'procexec/fork_stdio_buf-c/index',
                      'procexec/fork_whos_on_first-c/index',
                      'procexec/make_zombie-c/index',
                      'procexec/multi_sigchld-c/index',
                      'procexec/multi_wait-c/index',
                      'procexec/necho-c/index',
                      'procexec/orphan-c/index',
                      'procexec/pdeath_signal-c/index',
                      'procexec/print_wait_status-c/index',
                      'procexec/print_wait_status-h/index',
                      'procexec/simple_system-c/index',
                      'procexec/system-c/index',
                      'procexec/t_clone-c/index',
                      'procexec/t_execl-c/index',
                      'procexec/t_execle-c/index',
                      'procexec/t_execlp-c/index',
                      'procexec/t_execve-c/index',
                      'procexec/t_fork-c/index',
                      'procexec/t_system-c/index',
                      'procexec/t_vfork-c/index',
                      'procexec/vfork_fd_test-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Procpri',
                'items': [
                      'procpri/demo_sched_fifo-c/index',
                      'procpri/sched_set-c/index',
                      'procpri/sched_view-c/index',
                      'procpri/t_sched_getaffinity-c/index',
                      'procpri/t_sched_setaffinity-c/index',
                      'procpri/t_setpriority-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Procres',
                'items': [
                      'procres/print_rlimit-c/index',
                      'procres/print_rlimit-h/index',
                      'procres/print_rusage-c/index',
                      'procres/print_rusage-h/index',
                      'procres/rlimit_nproc-c/index',
                      'procres/rusage_wait-c/index',
                      'procres/rusage-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Progconc',
                'items': [
                      'progconc/syscall_speed-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Psem',
                'items': [
                      'psem/psem_create-c/index',
                      'psem/psem_getvalue-c/index',
                      'psem/psem_post-c/index',
                      'psem/psem_timedwait-c/index',
                      'psem/psem_trywait-c/index',
                      'psem/psem_unlink-c/index',
                      'psem/psem_wait-c/index',
                      'psem/thread_incr_psem-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Pshm',
                'items': [
                      'pshm/pshm_create-c/index',
                      'pshm/pshm_read-c/index',
                      'pshm/pshm_unlink-c/index',
                      'pshm/pshm_write-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Pty',
                'items': [
                      'pty/pty_fork-c/index',
                      'pty/pty_fork-h/index',
                      'pty/pty_master_open_bsd-c/index',
                      'pty/pty_master_open-c/index',
                      'pty/pty_master_open-h/index',
                      'pty/script-c/index',
                      'pty/unbuffer-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Seccomp',
                'items': [
                      'seccomp/dump_seccomp_filter-c/index',
                      'seccomp/libseccomp_demo-c/index',
                      'seccomp/seccomp_arg64-c/index',
                      'seccomp/seccomp_control_open-c/index',
                      'seccomp/seccomp_deny_open-c/index',
                      'seccomp/seccomp_launch-c/index',
                      'seccomp/seccomp_logging-c/index',
                      'seccomp/seccomp_multiarch-c/index',
                      'seccomp/seccomp_perf-c/index',
                      'seccomp/seccomp_trap_sigsys-c/index',
                      'seccomp/seccomp_user_notification-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs',
                'items': [
                      'shlibs/demo_no_lib-sh/index',
                      'shlibs/demo_shared_lib-sh/index',
                      'shlibs/demo_static_lib-sh/index',
                      'shlibs/dynload-c/index',
                      'shlibs/mod1-c/index',
                      'shlibs/mod2-c/index',
                      'shlibs/mod3-c/index',
                      'shlibs/prog-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs/demo Bsymbolic',
                'items': [
                      'shlibs/demo_Bsymbolic/build-sh/index',
                      'shlibs/demo_Bsymbolic/foo1-c/index',
                      'shlibs/demo_Bsymbolic/foo2-c/index',
                      'shlibs/demo_Bsymbolic/foo3-c/index',
                      'shlibs/demo_Bsymbolic/prog-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs/rpath demo',
                'items': [
                      'shlibs/rpath_demo/build-rpath-link-sh/index',
                      'shlibs/rpath_demo/build-sh/index',
                      'shlibs/rpath_demo/prog-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs/rpath demo/d1',
                'items': [
                      'shlibs/rpath_demo/d1/modx1-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs/rpath demo/d2',
                'items': [
                      'shlibs/rpath_demo/d2/modx2-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Shlibs/version scripts',
                'items': [
                      'shlibs/version_scripts/sv_build-sh/index',
                      'shlibs/version_scripts/sv_lib_v1-c/index',
                      'shlibs/version_scripts/sv_lib_v2-c/index',
                      'shlibs/version_scripts/sv_libabc-c/index',
                      'shlibs/version_scripts/sv_prog_abc-c/index',
                      'shlibs/version_scripts/sv_prog_complex-c/index',
                      'shlibs/version_scripts/sv_prog-c/index',
                      'shlibs/version_scripts/vis_build-sh/index',
                      'shlibs/version_scripts/vis_comm-c/index',
                      'shlibs/version_scripts/vis_f1-c/index',
                      'shlibs/version_scripts/vis_f2-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Signals',
                'items': [
                      'signals/catch_rtsigs-c/index',
                      'signals/demo_sigfpe-c/index',
                      'signals/ignore_pending_sig-c/index',
                      'signals/intquit-c/index',
                      'signals/nonreentrant-c/index',
                      'signals/ouch-c/index',
                      'signals/sig_receiver-c/index',
                      'signals/sig_sender-c/index',
                      'signals/sig_speed_sigsuspend-c/index',
                      'signals/siginterrupt-c/index',
                      'signals/sigmask_longjmp-c/index',
                      'signals/signal_functions-c/index',
                      'signals/signal_functions-h/index',
                      'signals/signal-c/index',
                      'signals/signalfd_sigval-c/index',
                      'signals/t_kill-c/index',
                      'signals/t_sigaltstack-c/index',
                      'signals/t_sigqueue-c/index',
                      'signals/t_sigsuspend-c/index',
                      'signals/t_sigwaitinfo-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Sockets',
                'items': [
                      'sockets/i6d_ucase_cl-c/index',
                      'sockets/i6d_ucase_sv-c/index',
                      'sockets/i6d_ucase-h/index',
                      'sockets/id_echo_cl-c/index',
                      'sockets/id_echo_sv-c/index',
                      'sockets/id_echo-h/index',
                      'sockets/inet_sockets-c/index',
                      'sockets/inet_sockets-h/index',
                      'sockets/is_echo_cl-c/index',
                      'sockets/is_echo_inetd_sv-c/index',
                      'sockets/is_echo_sv-c/index',
                      'sockets/is_echo_v2_sv-c/index',
                      'sockets/is_seqnum_cl-c/index',
                      'sockets/is_seqnum_sv-c/index',
                      'sockets/is_seqnum_v2_cl-c/index',
                      'sockets/is_seqnum_v2_sv-c/index',
                      'sockets/is_seqnum_v2-h/index',
                      'sockets/is_seqnum-h/index',
                      'sockets/list_host_addresses-c/index',
                      'sockets/rdwrn-c/index',
                      'sockets/rdwrn-h/index',
                      'sockets/read_line_buf-c/index',
                      'sockets/read_line_buf-h/index',
                      'sockets/read_line-c/index',
                      'sockets/read_line-h/index',
                      'sockets/scm_cred_recv-c/index',
                      'sockets/scm_cred_send-c/index',
                      'sockets/scm_cred-h/index',
                      'sockets/scm_functions-c/index',
                      'sockets/scm_functions-h/index',
                      'sockets/scm_multi_recv-c/index',
                      'sockets/scm_multi_send-c/index',
                      'sockets/scm_multi-h/index',
                      'sockets/scm_rights_recv-c/index',
                      'sockets/scm_rights_send-c/index',
                      'sockets/scm_rights-h/index',
                      'sockets/sendfile-c/index',
                      'sockets/socknames-c/index',
                      'sockets/t_gethostbyname-c/index',
                      'sockets/t_getservbyname-c/index',
                      'sockets/ud_ucase_cl-c/index',
                      'sockets/ud_ucase_sv-c/index',
                      'sockets/ud_ucase-h/index',
                      'sockets/unix_sockets-c/index',
                      'sockets/unix_sockets-h/index',
                      'sockets/us_abstract_bind-c/index',
                      'sockets/us_xfr_cl-c/index',
                      'sockets/us_xfr_sv-c/index',
                      'sockets/us_xfr_v2_cl-c/index',
                      'sockets/us_xfr_v2_sv-c/index',
                      'sockets/us_xfr_v2-h/index',
                      'sockets/us_xfr-h/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Svipc',
                'items': [
                      'svipc/svmsg_demo_server-c/index',
                      'svipc/t_ftok-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Svmsg',
                'items': [
                      'svmsg/svmsg_chqbytes-c/index',
                      'svmsg/svmsg_create-c/index',
                      'svmsg/svmsg_file_client-c/index',
                      'svmsg/svmsg_file_server-c/index',
                      'svmsg/svmsg_file-h/index',
                      'svmsg/svmsg_info-c/index',
                      'svmsg/svmsg_ls-c/index',
                      'svmsg/svmsg_receive-c/index',
                      'svmsg/svmsg_rm-c/index',
                      'svmsg/svmsg_send-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Svsem',
                'items': [
                      'svsem/binary_sems-c/index',
                      'svsem/binary_sems-h/index',
                      'svsem/event_flags-c/index',
                      'svsem/event_flags-h/index',
                      'svsem/semun-h/index',
                      'svsem/svsem_bad_init-c/index',
                      'svsem/svsem_create-c/index',
                      'svsem/svsem_demo-c/index',
                      'svsem/svsem_good_init-c/index',
                      'svsem/svsem_info-c/index',
                      'svsem/svsem_mon-c/index',
                      'svsem/svsem_op-c/index',
                      'svsem/svsem_rm-c/index',
                      'svsem/svsem_setall-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Svshm',
                'items': [
                      'svshm/svshm_attach-c/index',
                      'svshm/svshm_create-c/index',
                      'svshm/svshm_info-c/index',
                      'svshm/svshm_lock-c/index',
                      'svshm/svshm_mon-c/index',
                      'svshm/svshm_rm-c/index',
                      'svshm/svshm_unlock-c/index',
                      'svshm/svshm_xfr_reader-c/index',
                      'svshm/svshm_xfr_writer-c/index',
                      'svshm/svshm_xfr-h/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Sysinfo',
                'items': [
                      'sysinfo/procfs_pidmax-c/index',
                      'sysinfo/procfs_user_exe-c/index',
                      'sysinfo/t_uname-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Syslim',
                'items': [
                      'syslim/t_fpathconf-c/index',
                      'syslim/t_sysconf-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Threads',
                'items': [
                      'threads/detached_attrib-c/index',
                      'threads/one_time_init-c/index',
                      'threads/prod_condvar-c/index',
                      'threads/prod_no_condvar-c/index',
                      'threads/pthread_barrier_demo-c/index',
                      'threads/simple_thread-c/index',
                      'threads/strerror_test-c/index',
                      'threads/strerror_tls-c/index',
                      'threads/strerror_tsd-c/index',
                      'threads/strerror-c/index',
                      'threads/thread_cancel-c/index',
                      'threads/thread_cleanup-c/index',
                      'threads/thread_incr_mutex-c/index',
                      'threads/thread_incr_rwlock-c/index',
                      'threads/thread_incr_spinlock-c/index',
                      'threads/thread_incr-c/index',
                      'threads/thread_lock_speed-c/index',
                      'threads/thread_multijoin-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Time',
                'items': [
                      'time/calendar_time-c/index',
                      'time/curr_time-c/index',
                      'time/curr_time-h/index',
                      'time/process_time-c/index',
                      'time/show_time-c/index',
                      'time/strtime-c/index',
                      'time/t_stime-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Timers',
                'items': [
                      'timers/cpu_burner-c/index',
                      'timers/cpu_multi_burner-c/index',
                      'timers/cpu_multithread_burner-c/index',
                      'timers/demo_timerfd-c/index',
                      'timers/itimerspec_from_str-c/index',
                      'timers/itimerspec_from_str-h/index',
                      'timers/ptmr_null_evp-c/index',
                      'timers/ptmr_sigev_signal-c/index',
                      'timers/ptmr_sigev_thread-c/index',
                      'timers/real_timer-c/index',
                      'timers/t_clock_nanosleep-c/index',
                      'timers/t_nanosleep-c/index',
                      'timers/timed_read-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Tty',
                'items': [
                      'tty/demo_sigwinch-c/index',
                      'tty/new_intr-c/index',
                      'tty/no_echo-c/index',
                      'tty/test_tty_functions-c/index',
                      'tty/tty_functions-c/index',
                      'tty/tty_functions-h/index',
                      'tty/ttyname-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Users groups',
                'items': [
                      'users_groups/check_password-c/index',
                      'users_groups/t_getpwent-c/index',
                      'users_groups/t_getpwnam_r-c/index',
                      'users_groups/ugid_functions-c/index',
                      'users_groups/ugid_functions-h/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Vdso',
                'items': [
                      'vdso/gettimeofday-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Vmem',
                'items': [
                      'vmem/madvise_dontneed-c/index',
                      'vmem/memlock-c/index',
                      'vmem/t_mprotect-c/index'
                ]
          },
          {
                'type': 'category',
                'label': 'Xattr',
                'items': [
                      'xattr/t_setxattr-c/index',
                      'xattr/xattr_view-c/index'
                ]
          }
    ]
    }
  ],
};

module.exports = sidebars;
