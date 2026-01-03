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
                      'lib/build_ename-sh',
                      'lib/error_functions-c',
                      'lib/error_functions-h',
                      'lib/get_num-c',
                      'lib/get_num-h',
                      'lib/tlpi_hdr-h'
                ]
          }
    ]
    }
  ],
};

module.exports = sidebars;
