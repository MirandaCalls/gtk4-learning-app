import Gtk from 'gi://Gtk';
import GObject from 'gi://GObject';

export const FbrApplication = GObject.registerClass(
    {
        GTypeName: 'FbrApplication',
    },
    class extends Gtk.Application {
        vfunc_activate() {
            const window = new Gtk.ApplicationWindow({application: this});
            const box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});

            const image = new Gtk.Image({
                iconName: 'system-file-manager-symbolic',
                iconSize: Gtk.IconSize.LARGE,
            });
            box.append(image);

            window.child = box;
            window.present();
        }
    }
);
