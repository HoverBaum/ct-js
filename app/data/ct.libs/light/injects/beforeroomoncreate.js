if (this === ct.room) {
    ct.light.clear();
    ct.light.ambientColor = ct.u.hexToPixi(ct.room.lightAmbientColor);
    console.log('switch');
}
