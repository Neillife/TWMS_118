/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("�����������ֲ����ء��������#b#t5150010##k��#b#t5151000##k�������@�e�����^�ɣ�? \r\n#L0#���Q����: #i5150000##t5150000##l\r\n#L1#Ⱦɫ: #i5151000##t5151000##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470];
	    } else {
		hair_Colo_new = [31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
	    cm.sendYesNo("ʹ������һ����T�������S�C���Q��͡���_��Ҫʹ��#b#t5150010##k���Q��͆�?");

	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
	    cm.sendYesNo("ʹ��Ⱦɫһ����T�������S�C���Q�ɫ����_��Ҫʹ��#b#t5151000##k���Q�ɫ��??");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150000, hair_Colo_new) == 1) {
		cm.sendOk("�����������Ͱ�!");
	    } else {
		cm.sendOk("��...�����]���҂�����Č�����󌿨����...�ܱ�Ǹ���]����󌿨��Ԓ���Ҳ��ܽo�����^�...");
	    }
	} else {
	    if (cm.setRandomAvatar(5151000, hair_Colo_new) == 1) {
		cm.sendOk("����������ɫ��!");
	    } else {
		cm.sendOk("��...�����]���҂�����Č���Ⱦɫ������...�ܱ�Ǹ���]��Ⱦɫ����Ԓ���Ҳ��ܽo����Ⱦɫ...");
	    }
	}
	cm.safeDispose();
    }
}
