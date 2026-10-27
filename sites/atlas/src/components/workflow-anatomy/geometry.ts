import * as kit from './vendor/iso-kit';

const bed = { x: -202, y: -65, w: 404, d: 130, r: 8 };
export const stationX = [-152, -76, 0, 76, 152];
export const projection = kit.fitProjection([...kit.boxCorners(bed, -17, 0), [-195, -54, 84], [195, -30, 84]], 720, 365, { pad: 22, azimuth: 62, elevation: 30 });
const parts: string[] = [];
let partCount = 0;

function block(x: number, y: number, w: number, d: number, z: number, h: number, tone: kit.Tone = 'mid', lit = false) {
  partCount += 1;
  return kit.solidSvg(kit.slabOf({ x, y, w, d, r: Math.min(2, w / 5, d / 5) }, z, h, projection, 5, Math.min(.6, h / 4)), { tone, lit });
}

function screws(x: number, y: number, w: number, d: number, z: number) {
  return kit.dotsSvg(kit.corners({ x, y, w, d, r: 0 }, 3).map(([px, py]) => kit.iso([px, py, z], projection)), { size: .7, tone: 'hi' });
}

for (const [x, y] of kit.corners(bed, 20).sort((a, b) => kit.depthOf([a[0], a[1], 0], projection) - kit.depthOf([b[0], b[1], 0], projection))) {
  parts.push(block(x - 9, y - 7, 18, 14, -17, 4, 'lo'));
  parts.push(block(x - 7, y - 5, 14, 10, -13, 4, 'lo'));
}
parts.push(block(bed.x, bed.y, bed.w, bed.d, -9, 9));
parts.push(kit.lineSvg(kit.planOutline(kit.insetPlan(bed, 5), 0, projection), { tone: 'lo' }));
parts.push(screws(bed.x + 6, bed.y + 6, bed.w - 12, bed.d - 12, 0));

for (const x of [-187, 179]) {
  parts.push(block(x - 5, -54, 18, 24, 0, 4));
  parts.push(screws(x - 5, -54, 18, 24, 4));
  parts.push(block(x, -49, 8, 14, 4, 67));
  parts.push(block(x - 3, -52, 14, 20, 71, 4));
}
parts.push(block(-187, -49, 374, 14, 62, 8));
parts.push(block(-181, -47, 362, 10, 70, 2, 'hi'));
parts.push(block(-177, 48, 354, 7, 0, .8, 'lo'));
const ticks = kit.topTicks(-172, 172, 4, 5, 48, .8, [2.5, 5], projection);
parts.push(kit.lineSvg(ticks.minor, { tone: 'lo' }), kit.lineSvg(ticks.major, { tone: 'mid' }));

export const baseArt = parts.join('');
export const stationArt = stationX.map((x, index) => {
  const art = [block(x - 27, -18, 54, 58, 0, 3, 'lo')];
  art.push(block(x - 27, -18, 3, 58, 3, 4));
  art.push(block(x + 24, -18, 3, 58, 3, 4));
  art.push(block(x - 24, -18, 48, 3, 3, 4));
  for (let sheet = 0; sheet < 3; sheet += 1) {
    art.push(block(x - 20 + sheet * .5, -10 + sheet, 39, 41, 3 + sheet * 1.3, 1, 'hi'));
  }
  for (let line = 0; line < 4; line += 1) {
    art.push(kit.lineSvg(kit.lineOnTop([x - 14, line * 6], [x + (line === 3 ? 2 : 13), line * 6], 6.6, projection), { tone: 'lo', free: true }));
  }
  art.push(block(x - 10, 34, 20, 5, 3, 1, 'mid'));
  art.push(kit.dotsSvg(Array.from({ length: index + 1 }, (_, i) => kit.iso([x - index * 2 + i * 4, 36.5, 4], projection)), { size: .7, tone: 'hi' }));
  return art.join('');
});

const moving: string[] = [];
moving.push(block(-15, -54, 30, 24, 72, 6, 'hi'));
moving.push(screws(-15, -54, 30, 24, 78));
moving.push(block(-10, -34, 20, 9, 67, 6, 'hi'));
moving.push(block(-8, -29, 16, 11, 32, 41, 'hi'));
moving.push(block(-15, -30, 30, 14, 43, 5, 'mid'));
moving.push(block(-12, -25, 24, 52, 28, 4, 'hi'));
moving.push(block(-9, 10, 18, 14, 15, 13, 'hi'));
moving.push(block(-16, 6, 32, 22, 11, 4, 'hi', true));
moving.push(block(-5, -48, 10, 12, 78, 4, 'hi', true));
export const carriageArt = moving.join('');
export const solids = partCount;
export function carriagePosition(index: number) {
  const [x, y] = kit.axisVector(projection, [stationX[index], 0, 0]);
  return `translate(${x}px, ${y}px)`;
}
