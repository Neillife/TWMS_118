/* Dances with Balrog
 Warrior Job Advancement
 Victoria Road : Warriors' Sanctuary (102000003)
 
 Custom Quest 100003, 100005
 */

var status = 0;
var jobId;
var jobName;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("Ո��ԇ.");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.getJob() == 0) {
            if (cm.getPlayer().getLevel() >= 10) {
                cm.sendNext("��Ҫ�D�ɞ�һλ #r������#k ?");
            } else {
                cm.sendOk("��߀�����D�ɞ� #r������#k ��B8.");
                cm.dispose();
            }
        } else {
            if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 300) { // ������
                if (cm.haveItem(4031012, 1)) {
                    if (cm.haveItem(4031012, 1)) {
                        status = 20;
                        cm.sendNext("�ҿ���������˜yԇ. ��Ҫ�^�m�DՈ�c��һ�!");
                    } else {
                        if (!cm.haveItem(4031010)) {
                            cm.gainItem(4031010, 1);
                        }
                        cm.sendOk("Ոȥ�� #r�������D�̹�#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("���ѽ������D��,Ҫ�DՈ�c��һ�.");
                }
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 310 || cm.getJob() == 320) {
                if (cm.haveItem(4031059, 1)) {
                    cm.gainItem(4031057, 1);
                    cm.gainItem(4031059, -1);
                    cm.warp(211000001, 0);
                    cm.sendOk("�������һ����򞣬�F��ȥ�� #b����#k.");
                } else {
                    cm.sendOk("��, #b#h0##k! ����Ҫһ�� #b�ڷ�#k. ��ȥ�Ү���Ԫ���g�ýo��");
                }
                cm.dispose();
            } else {
                cm.sendOk("���,���ǹ������D��.");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        cm.sendNextPrev("һ���D�˾Ͳ��ܷ���,��������DՈ�c��һ�.");
    } else if (status == 2) {
        cm.sendYesNo("�����Ҫ�ɞ�һλ #r������#k ?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.changeJob(300); // ������
            cm.resetStats(4, 25, 4, 4);
        }
        cm.forceCompleteQuest(6700);
        cm.gainItem(1452002, 1);
        cm.gainItem(2060000, 1000);
        cm.sendOk("�D�ɹ� ! Ոȥ�_�����°�.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendNextPrev("������x����Ҫ�D�ɞ�һλ #r�C��#k, #r����#k.")
    } else if (status == 12) {
        cm.askAcceptDecline("�����ұ���Ȝyԇ��,��ʂ���ˆ� ?");
    } else if (status == 13) {
        cm.gainItem(4031010, 1);
        cm.warp(106010000);
        cm.sendOk("Ոȥ�� #b�������D�̹�#k . �����������.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("����Ҫ�ɞ�ʲ�N ? #b\r\n#L0#�C��#l\r\n#L1#����#l#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "�C��";
            job = 310;
        } else if (selection == 1) {
            jobName = "����";
            job = 320;
        }
        cm.sendYesNo("�����Ҫ�ɞ�һλ #r" + jobName + "#k?");
    } else if (status == 23) {
        cm.changeJob(job);
        cm.gainItem(4031012, -1);
        cm.sendOk("�D�ɹ� ! Ոȥ�_�����°�.");
        cm.dispose();
    }
}
