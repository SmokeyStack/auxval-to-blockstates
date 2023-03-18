<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'id',
            sortable: false,
            title: 'Block Id',
          },
          { key: 'dv', title: 'Aux Val' },
          { key: 'bs', title: 'Block State' },
        ],
        items: [
            {
                "id": "minecraft:acacia_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:acacia_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:acacia_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:acacia_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:acacia_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:acacia_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 0,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 1,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 2,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 3,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 4,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 5,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 6,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 7,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 8,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 9,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 10,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 11,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 12,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 13,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 14,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:activator_rail",
                "dv": 15,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:andesite_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 0,
                "bs": "[\"damage\" : \"undamaged\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 1,
                "bs": "[\"damage\" : \"undamaged\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 2,
                "bs": "[\"damage\" : \"undamaged\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 3,
                "bs": "[\"damage\" : \"undamaged\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 4,
                "bs": "[\"damage\" : \"slightly_damaged\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 5,
                "bs": "[\"damage\" : \"slightly_damaged\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 6,
                "bs": "[\"damage\" : \"slightly_damaged\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 7,
                "bs": "[\"damage\" : \"slightly_damaged\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 8,
                "bs": "[\"damage\" : \"very_damaged\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 9,
                "bs": "[\"damage\" : \"very_damaged\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 10,
                "bs": "[\"damage\" : \"very_damaged\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 11,
                "bs": "[\"damage\" : \"very_damaged\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 12,
                "bs": "[\"damage\" : \"broken\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 13,
                "bs": "[\"damage\" : \"broken\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 14,
                "bs": "[\"damage\" : \"broken\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:anvil",
                "dv": 15,
                "bs": "[\"damage\" : \"broken\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 0,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 1,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 2,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 3,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 4,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 5,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 6,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 7,
                "bs": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 8,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 9,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 10,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 11,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 12,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 13,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 14,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "id": "minecraft:bamboo",
                "dv": 15,
                "bs": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 0,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 1,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 2,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 3,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 4,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 5,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 6,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 7,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 8,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 9,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 10,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 11,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 12,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 13,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 14,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:bamboo_sapling",
                "dv": 15,
                "bs": "[\"age_bit\" : 1, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:barrel",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:basalt",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:basalt",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:basalt",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:bed",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "id": "minecraft:bed",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bed",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "id": "minecraft:bedrock",
                "dv": 0,
                "bs": "[\"infiniburn_bit\" : 0]"
            },
            {
                "id": "minecraft:bedrock",
                "dv": 1,
                "bs": "[\"infiniburn_bit\" : 1]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:beetroot",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:bell",
                "dv": 0,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 1,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 2,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 3,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 4,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 5,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 6,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 7,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 8,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 9,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 10,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 11,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 12,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 13,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 14,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 15,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:bell",
                "dv": 16,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 17,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 18,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 19,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 20,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 21,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 22,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 23,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 24,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 25,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 26,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 27,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 28,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 29,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 30,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:bell",
                "dv": 31,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:birch_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:birch_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:birch_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:birch_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:birch_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:black_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:black_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:black_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:black_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:blackstone_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:blackstone_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:blackstone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:blast_furnace",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:blue_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:blue_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:blue_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:blue_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 0,
                "bs": "[\"deprecated\" : 0, \"direction\" : 0]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 1,
                "bs": "[\"deprecated\" : 1, \"direction\" : 0]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 2,
                "bs": "[\"deprecated\" : 2, \"direction\" : 0]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 3,
                "bs": "[\"deprecated\" : 3, \"direction\" : 0]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 4,
                "bs": "[\"deprecated\" : 0, \"direction\" : 1]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 5,
                "bs": "[\"deprecated\" : 1, \"direction\" : 1]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 6,
                "bs": "[\"deprecated\" : 2, \"direction\" : 1]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 7,
                "bs": "[\"deprecated\" : 3, \"direction\" : 1]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 8,
                "bs": "[\"deprecated\" : 0, \"direction\" : 2]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 9,
                "bs": "[\"deprecated\" : 1, \"direction\" : 2]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 10,
                "bs": "[\"deprecated\" : 2, \"direction\" : 2]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 11,
                "bs": "[\"deprecated\" : 3, \"direction\" : 2]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 12,
                "bs": "[\"deprecated\" : 0, \"direction\" : 3]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 13,
                "bs": "[\"deprecated\" : 1, \"direction\" : 3]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 14,
                "bs": "[\"deprecated\" : 2, \"direction\" : 3]"
            },
            {
                "id": "minecraft:bone_block",
                "dv": 15,
                "bs": "[\"deprecated\" : 3, \"direction\" : 3]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 0,
                "bs": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 1,
                "bs": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 2,
                "bs": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 3,
                "bs": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 4,
                "bs": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 5,
                "bs": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 6,
                "bs": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "id": "minecraft:brewing_stand",
                "dv": 7,
                "bs": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:brown_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:brown_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:brown_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:brown_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 0,
                "bs": "[\"huge_mushroom_bits\" : 0]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 1,
                "bs": "[\"huge_mushroom_bits\" : 1]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 2,
                "bs": "[\"huge_mushroom_bits\" : 2]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 3,
                "bs": "[\"huge_mushroom_bits\" : 3]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 4,
                "bs": "[\"huge_mushroom_bits\" : 4]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 5,
                "bs": "[\"huge_mushroom_bits\" : 5]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 6,
                "bs": "[\"huge_mushroom_bits\" : 6]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 7,
                "bs": "[\"huge_mushroom_bits\" : 7]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 8,
                "bs": "[\"huge_mushroom_bits\" : 8]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 9,
                "bs": "[\"huge_mushroom_bits\" : 9]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 10,
                "bs": "[\"huge_mushroom_bits\" : 10]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 11,
                "bs": "[\"huge_mushroom_bits\" : 11]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 12,
                "bs": "[\"huge_mushroom_bits\" : 12]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 13,
                "bs": "[\"huge_mushroom_bits\" : 13]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 14,
                "bs": "[\"huge_mushroom_bits\" : 14]"
            },
            {
                "id": "minecraft:brown_mushroom_block",
                "dv": 15,
                "bs": "[\"huge_mushroom_bits\" : 15]"
            },
            {
                "id": "minecraft:bubble_column",
                "dv": 0,
                "bs": "[\"drag_down\" : 0]"
            },
            {
                "id": "minecraft:bubble_column",
                "dv": 1,
                "bs": "[\"drag_down\" : 1]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 4,
                "bs": "[\"age\" : 4]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 5,
                "bs": "[\"age\" : 5]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 6,
                "bs": "[\"age\" : 6]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 7,
                "bs": "[\"age\" : 7]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 8,
                "bs": "[\"age\" : 8]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 9,
                "bs": "[\"age\" : 9]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 10,
                "bs": "[\"age\" : 10]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 11,
                "bs": "[\"age\" : 11]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 12,
                "bs": "[\"age\" : 12]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 13,
                "bs": "[\"age\" : 13]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 14,
                "bs": "[\"age\" : 14]"
            },
            {
                "id": "minecraft:cactus",
                "dv": 15,
                "bs": "[\"age\" : 15]"
            },
            {
                "id": "minecraft:cake",
                "dv": 0,
                "bs": "[\"bite_counter\" : 0]"
            },
            {
                "id": "minecraft:cake",
                "dv": 1,
                "bs": "[\"bite_counter\" : 1]"
            },
            {
                "id": "minecraft:cake",
                "dv": 2,
                "bs": "[\"bite_counter\" : 2]"
            },
            {
                "id": "minecraft:cake",
                "dv": 3,
                "bs": "[\"bite_counter\" : 3]"
            },
            {
                "id": "minecraft:cake",
                "dv": 4,
                "bs": "[\"bite_counter\" : 4]"
            },
            {
                "id": "minecraft:cake",
                "dv": 5,
                "bs": "[\"bite_counter\" : 5]"
            },
            {
                "id": "minecraft:cake",
                "dv": 6,
                "bs": "[\"bite_counter\" : 6]"
            },
            {
                "id": "minecraft:cake",
                "dv": 7,
                "bs": "[\"bite_counter\" : 7]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"extinguished\" : 0]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"extinguished\" : 0]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"extinguished\" : 0]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"extinguished\" : 0]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"extinguished\" : 1]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"extinguished\" : 1]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"extinguished\" : 1]"
            },
            {
                "id": "minecraft:campfire",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"extinguished\" : 1]"
            },
            {
                "id": "minecraft:candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:carpet",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:carrots",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:carved_pumpkin",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:carved_pumpkin",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:carved_pumpkin",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:carved_pumpkin",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 0,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 0]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 1,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 1]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 2,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 2]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 3,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 3]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 4,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 4]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 5,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 5]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 6,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 6]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 7,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 7]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 8,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 0]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 9,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 1]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 10,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 2]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 11,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 3]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 12,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 4]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 13,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 5]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 14,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 6]"
            },
            {
                "id": "minecraft:cauldron",
                "dv": 15,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 7]"
            },
            {
                "id": "minecraft:chain",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:chain",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:chain",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 0,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 1,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 2,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 3,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 4,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 5,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 6,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 7,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 8,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 9,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 10,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 11,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 12,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 13,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 14,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:chain_command_block",
                "dv": 15,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:chalkboard",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:chalkboard",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:chalkboard",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:chalkboard",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 0,
                "bs": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 1,
                "bs": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 2,
                "bs": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 3,
                "bs": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 4,
                "bs": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 5,
                "bs": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 6,
                "bs": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 7,
                "bs": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 8,
                "bs": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 9,
                "bs": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 10,
                "bs": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 11,
                "bs": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 12,
                "bs": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 13,
                "bs": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 14,
                "bs": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:chemistry_table",
                "dv": 15,
                "bs": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:chest",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:chest",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:chest",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:chest",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:chest",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:chest",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:chest",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:chest",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 4,
                "bs": "[\"age\" : 4]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 5,
                "bs": "[\"age\" : 5]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 6,
                "bs": "[\"age\" : 6]"
            },
            {
                "id": "minecraft:chorus_flower",
                "dv": 7,
                "bs": "[\"age\" : 7]"
            },
            {
                "id": "minecraft:cobbled_deepslate_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:cobbled_deepslate_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 0,
                "bs": "[\"wall_block_type\" : \"cobblestone\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 1,
                "bs": "[\"wall_block_type\" : \"mossy_cobblestone\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 2,
                "bs": "[\"wall_block_type\" : \"granite\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 3,
                "bs": "[\"wall_block_type\" : \"diorite\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 4,
                "bs": "[\"wall_block_type\" : \"andesite\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 5,
                "bs": "[\"wall_block_type\" : \"sandstone\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 6,
                "bs": "[\"wall_block_type\" : \"brick\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 7,
                "bs": "[\"wall_block_type\" : \"stone_brick\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 8,
                "bs": "[\"wall_block_type\" : \"mossy_stone_brick\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 9,
                "bs": "[\"wall_block_type\" : \"nether_brick\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 10,
                "bs": "[\"wall_block_type\" : \"end_brick\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 11,
                "bs": "[\"wall_block_type\" : \"prismarine\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 12,
                "bs": "[\"wall_block_type\" : \"red_sandstone\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 13,
                "bs": "[\"wall_block_type\" : \"red_nether_brick\"]"
            },
            {
                "id": "minecraft:cobblestone_wall",
                "dv": 14,
                "bs": "[\"wall_block_type\" : \"cobblestone\"]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 0,
                "bs": "[\"age\" : 0, \"direction\" : 0]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 1,
                "bs": "[\"age\" : 0, \"direction\" : 1]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 2,
                "bs": "[\"age\" : 0, \"direction\" : 2]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 3,
                "bs": "[\"age\" : 0, \"direction\" : 3]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 4,
                "bs": "[\"age\" : 1, \"direction\" : 0]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 5,
                "bs": "[\"age\" : 1, \"direction\" : 1]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 6,
                "bs": "[\"age\" : 1, \"direction\" : 2]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 7,
                "bs": "[\"age\" : 1, \"direction\" : 3]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 8,
                "bs": "[\"age\" : 2, \"direction\" : 0]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 9,
                "bs": "[\"age\" : 2, \"direction\" : 1]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 10,
                "bs": "[\"age\" : 2, \"direction\" : 2]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 11,
                "bs": "[\"age\" : 2, \"direction\" : 3]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 12,
                "bs": "[\"age\" : 3, \"direction\" : 0]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 13,
                "bs": "[\"age\" : 3, \"direction\" : 1]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 14,
                "bs": "[\"age\" : 3, \"direction\" : 2]"
            },
            {
                "id": "minecraft:cocoa",
                "dv": 15,
                "bs": "[\"age\" : 3, \"direction\" : 3]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 0,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 1,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"west\"]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 2,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"east\"]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 3,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"north\"]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 4,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"south\"]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 5,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"top\"]"
            },
            {
                "id": "minecraft:colored_torch_bp",
                "dv": 6,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 0,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 1,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"west\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 2,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"east\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 3,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"north\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 4,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"south\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 5,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"top\"]"
            },
            {
                "id": "minecraft:colored_torch_rg",
                "dv": 6,
                "bs": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 0,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 1,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 2,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 3,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 4,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 5,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 6,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 7,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 8,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 9,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 10,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 11,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 12,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 13,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 14,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:command_block",
                "dv": 15,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:composter",
                "dv": 0,
                "bs": "[\"composter_fill_level\" : 0]"
            },
            {
                "id": "minecraft:composter",
                "dv": 1,
                "bs": "[\"composter_fill_level\" : 1]"
            },
            {
                "id": "minecraft:composter",
                "dv": 2,
                "bs": "[\"composter_fill_level\" : 2]"
            },
            {
                "id": "minecraft:composter",
                "dv": 3,
                "bs": "[\"composter_fill_level\" : 3]"
            },
            {
                "id": "minecraft:composter",
                "dv": 4,
                "bs": "[\"composter_fill_level\" : 4]"
            },
            {
                "id": "minecraft:composter",
                "dv": 5,
                "bs": "[\"composter_fill_level\" : 5]"
            },
            {
                "id": "minecraft:composter",
                "dv": 6,
                "bs": "[\"composter_fill_level\" : 6]"
            },
            {
                "id": "minecraft:composter",
                "dv": 7,
                "bs": "[\"composter_fill_level\" : 7]"
            },
            {
                "id": "minecraft:composter",
                "dv": 8,
                "bs": "[\"composter_fill_level\" : 8]"
            },
            {
                "id": "minecraft:composter",
                "dv": 9,
                "bs": "[\"composter_fill_level\" : 9]"
            },
            {
                "id": "minecraft:composter",
                "dv": 10,
                "bs": "[\"composter_fill_level\" : 10]"
            },
            {
                "id": "minecraft:composter",
                "dv": 11,
                "bs": "[\"composter_fill_level\" : 11]"
            },
            {
                "id": "minecraft:composter",
                "dv": 12,
                "bs": "[\"composter_fill_level\" : 12]"
            },
            {
                "id": "minecraft:composter",
                "dv": 13,
                "bs": "[\"composter_fill_level\" : 13]"
            },
            {
                "id": "minecraft:composter",
                "dv": 14,
                "bs": "[\"composter_fill_level\" : 14]"
            },
            {
                "id": "minecraft:composter",
                "dv": 15,
                "bs": "[\"composter_fill_level\" : 15]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:concrete",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:concrete_powder",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:coral",
                "dv": 0,
                "bs": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral",
                "dv": 1,
                "bs": "[\"coral_color\" : \"pink\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral",
                "dv": 2,
                "bs": "[\"coral_color\" : \"purple\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral",
                "dv": 3,
                "bs": "[\"coral_color\" : \"red\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral",
                "dv": 4,
                "bs": "[\"coral_color\" : \"yellow\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral",
                "dv": 5,
                "bs": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_block",
                "dv": 0,
                "bs": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_block",
                "dv": 1,
                "bs": "[\"coral_color\" : \"pink\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_block",
                "dv": 2,
                "bs": "[\"coral_color\" : \"purple\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_block",
                "dv": 3,
                "bs": "[\"coral_color\" : \"red\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_block",
                "dv": 4,
                "bs": "[\"coral_color\" : \"yellow\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_block",
                "dv": 5,
                "bs": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan",
                "dv": 0,
                "bs": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan",
                "dv": 1,
                "bs": "[\"coral_color\" : \"pink\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan",
                "dv": 2,
                "bs": "[\"coral_color\" : \"purple\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan",
                "dv": 3,
                "bs": "[\"coral_color\" : \"red\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan",
                "dv": 4,
                "bs": "[\"coral_color\" : \"yellow\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan",
                "dv": 5,
                "bs": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_dead",
                "dv": 0,
                "bs": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_dead",
                "dv": 1,
                "bs": "[\"coral_color\" : \"pink\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_dead",
                "dv": 2,
                "bs": "[\"coral_color\" : \"purple\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_dead",
                "dv": 3,
                "bs": "[\"coral_color\" : \"red\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_dead",
                "dv": 4,
                "bs": "[\"coral_color\" : \"yellow\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_dead",
                "dv": 5,
                "bs": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 0,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 1,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 2,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 3,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 4,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 5,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 6,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 7,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 8,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 9,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 10,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 11,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 12,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 13,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 14,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang",
                "dv": 15,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 0,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 1,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 2,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 3,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 4,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 5,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 6,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 7,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 8,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 9,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 10,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 11,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 12,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 13,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 14,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang2",
                "dv": 15,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 0,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 1,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 2,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 3,
                "bs": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 4,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 5,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 6,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 7,
                "bs": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 8,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 9,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 10,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 11,
                "bs": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 12,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 13,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 14,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:coral_fan_hang3",
                "dv": 15,
                "bs": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:crimson_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:crimson_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:crimson_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:crimson_stem",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:crimson_stem",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:crimson_stem",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:crimson_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:cyan_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:cyan_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:cyan_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:cyan_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:dark_oak_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:dark_oak_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:dark_oak_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_oak_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:dark_prismarine_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:darkoak_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:darkoak_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:daylight_detector",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:daylight_detector_inverted",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:deepslate_brick_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:deepslate_brick_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:deepslate_tile_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:deepslate_tile_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 0,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 1,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 2,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 3,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 4,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 5,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 6,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 7,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 8,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 9,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 10,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 11,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 12,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 13,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 14,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:detector_rail",
                "dv": 15,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:diorite_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:dirt",
                "dv": 0,
                "bs": "[\"dirt_type\" : \"normal\"]"
            },
            {
                "id": "minecraft:dirt",
                "dv": 1,
                "bs": "[\"dirt_type\" : \"coarse\"]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dispenser",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 0,
                "bs": "[\"double_plant_type\" : \"sunflower\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 1,
                "bs": "[\"double_plant_type\" : \"syringa\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 2,
                "bs": "[\"double_plant_type\" : \"grass\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 3,
                "bs": "[\"double_plant_type\" : \"fern\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 4,
                "bs": "[\"double_plant_type\" : \"rose\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 5,
                "bs": "[\"double_plant_type\" : \"paeonia\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_plant",
                "dv": 6,
                "bs": "[\"double_plant_type\" : \"sunflower\", \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 0,
                "bs": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 1,
                "bs": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 2,
                "bs": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 3,
                "bs": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 4,
                "bs": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 5,
                "bs": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 6,
                "bs": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 7,
                "bs": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 8,
                "bs": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 9,
                "bs": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 10,
                "bs": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 11,
                "bs": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 12,
                "bs": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 13,
                "bs": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 14,
                "bs": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab",
                "dv": 15,
                "bs": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 0,
                "bs": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 1,
                "bs": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 2,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 3,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 4,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 5,
                "bs": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 6,
                "bs": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 7,
                "bs": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 8,
                "bs": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 9,
                "bs": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 10,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 11,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 12,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 13,
                "bs": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 14,
                "bs": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab2",
                "dv": 15,
                "bs": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 0,
                "bs": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 1,
                "bs": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 2,
                "bs": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 3,
                "bs": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 4,
                "bs": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 5,
                "bs": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 6,
                "bs": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 7,
                "bs": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 8,
                "bs": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 9,
                "bs": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 10,
                "bs": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 11,
                "bs": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 12,
                "bs": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 13,
                "bs": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 14,
                "bs": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab3",
                "dv": 15,
                "bs": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:double_stone_block_slab4",
                "dv": 0,
                "bs": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab4",
                "dv": 1,
                "bs": "[\"stone_slab_type_4\" : \"smooth_quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab4",
                "dv": 2,
                "bs": "[\"stone_slab_type_4\" : \"stone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab4",
                "dv": 3,
                "bs": "[\"stone_slab_type_4\" : \"cut_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab4",
                "dv": 4,
                "bs": "[\"stone_slab_type_4\" : \"cut_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_stone_block_slab4",
                "dv": 5,
                "bs": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 2,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 3,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 4,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 5,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:double_wooden_slab",
                "dv": 6,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"triggered_bit\" : 0]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:dropper",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"triggered_bit\" : 1]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:end_brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"end_portal_eye_bit\" : 0]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"end_portal_eye_bit\" : 0]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"end_portal_eye_bit\" : 0]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"end_portal_eye_bit\" : 0]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"end_portal_eye_bit\" : 1]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"end_portal_eye_bit\" : 1]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"end_portal_eye_bit\" : 1]"
            },
            {
                "id": "minecraft:end_portal_frame",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"end_portal_eye_bit\" : 1]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:end_rod",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:ender_chest",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:exposed_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:exposed_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 0,
                "bs": "[\"moisturized_amount\" : 0]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 1,
                "bs": "[\"moisturized_amount\" : 1]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 2,
                "bs": "[\"moisturized_amount\" : 2]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 3,
                "bs": "[\"moisturized_amount\" : 3]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 4,
                "bs": "[\"moisturized_amount\" : 4]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 5,
                "bs": "[\"moisturized_amount\" : 5]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 6,
                "bs": "[\"moisturized_amount\" : 6]"
            },
            {
                "id": "minecraft:farmland",
                "dv": 7,
                "bs": "[\"moisturized_amount\" : 7]"
            },
            {
                "id": "minecraft:fence",
                "dv": 0,
                "bs": "[\"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:fence",
                "dv": 1,
                "bs": "[\"wood_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:fence",
                "dv": 2,
                "bs": "[\"wood_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:fence",
                "dv": 3,
                "bs": "[\"wood_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:fence",
                "dv": 4,
                "bs": "[\"wood_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:fence",
                "dv": 5,
                "bs": "[\"wood_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:fence",
                "dv": 6,
                "bs": "[\"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:fire",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:fire",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:fire",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:fire",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:fire",
                "dv": 4,
                "bs": "[\"age\" : 4]"
            },
            {
                "id": "minecraft:fire",
                "dv": 5,
                "bs": "[\"age\" : 5]"
            },
            {
                "id": "minecraft:fire",
                "dv": 6,
                "bs": "[\"age\" : 6]"
            },
            {
                "id": "minecraft:fire",
                "dv": 7,
                "bs": "[\"age\" : 7]"
            },
            {
                "id": "minecraft:fire",
                "dv": 8,
                "bs": "[\"age\" : 8]"
            },
            {
                "id": "minecraft:fire",
                "dv": 9,
                "bs": "[\"age\" : 9]"
            },
            {
                "id": "minecraft:fire",
                "dv": 10,
                "bs": "[\"age\" : 10]"
            },
            {
                "id": "minecraft:fire",
                "dv": 11,
                "bs": "[\"age\" : 11]"
            },
            {
                "id": "minecraft:fire",
                "dv": 12,
                "bs": "[\"age\" : 12]"
            },
            {
                "id": "minecraft:fire",
                "dv": 13,
                "bs": "[\"age\" : 13]"
            },
            {
                "id": "minecraft:fire",
                "dv": 14,
                "bs": "[\"age\" : 14]"
            },
            {
                "id": "minecraft:fire",
                "dv": 15,
                "bs": "[\"age\" : 15]"
            },
            {
                "id": "minecraft:flower_pot",
                "dv": 0,
                "bs": "[\"update_bit\" : 0]"
            },
            {
                "id": "minecraft:flower_pot",
                "dv": 1,
                "bs": "[\"update_bit\" : 1]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 0,
                "bs": "[\"liquid_depth\" : 0]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 1,
                "bs": "[\"liquid_depth\" : 1]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 2,
                "bs": "[\"liquid_depth\" : 2]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 3,
                "bs": "[\"liquid_depth\" : 3]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 4,
                "bs": "[\"liquid_depth\" : 4]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 5,
                "bs": "[\"liquid_depth\" : 5]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 6,
                "bs": "[\"liquid_depth\" : 6]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 7,
                "bs": "[\"liquid_depth\" : 7]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 8,
                "bs": "[\"liquid_depth\" : 8]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 9,
                "bs": "[\"liquid_depth\" : 9]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 10,
                "bs": "[\"liquid_depth\" : 10]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 11,
                "bs": "[\"liquid_depth\" : 11]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 12,
                "bs": "[\"liquid_depth\" : 12]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 13,
                "bs": "[\"liquid_depth\" : 13]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 14,
                "bs": "[\"liquid_depth\" : 14]"
            },
            {
                "id": "minecraft:flowing_lava",
                "dv": 15,
                "bs": "[\"liquid_depth\" : 15]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 0,
                "bs": "[\"liquid_depth\" : 0]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 1,
                "bs": "[\"liquid_depth\" : 1]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 2,
                "bs": "[\"liquid_depth\" : 2]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 3,
                "bs": "[\"liquid_depth\" : 3]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 4,
                "bs": "[\"liquid_depth\" : 4]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 5,
                "bs": "[\"liquid_depth\" : 5]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 6,
                "bs": "[\"liquid_depth\" : 6]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 7,
                "bs": "[\"liquid_depth\" : 7]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 8,
                "bs": "[\"liquid_depth\" : 8]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 9,
                "bs": "[\"liquid_depth\" : 9]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 10,
                "bs": "[\"liquid_depth\" : 10]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 11,
                "bs": "[\"liquid_depth\" : 11]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 12,
                "bs": "[\"liquid_depth\" : 12]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 13,
                "bs": "[\"liquid_depth\" : 13]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 14,
                "bs": "[\"liquid_depth\" : 14]"
            },
            {
                "id": "minecraft:flowing_water",
                "dv": 15,
                "bs": "[\"liquid_depth\" : 15]"
            },
            {
                "id": "minecraft:frame",
                "dv": 0,
                "bs": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:frame",
                "dv": 1,
                "bs": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:frame",
                "dv": 2,
                "bs": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:frame",
                "dv": 3,
                "bs": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:frame",
                "dv": 4,
                "bs": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:frame",
                "dv": 5,
                "bs": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:frame",
                "dv": 6,
                "bs": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:frame",
                "dv": 7,
                "bs": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:frosted_ice",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:frosted_ice",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:frosted_ice",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:frosted_ice",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:furnace",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 0,
                "bs": "[\"multi_face_direction_bits\" : 0]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 1,
                "bs": "[\"multi_face_direction_bits\" : 1]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 2,
                "bs": "[\"multi_face_direction_bits\" : 2]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 3,
                "bs": "[\"multi_face_direction_bits\" : 3]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 4,
                "bs": "[\"multi_face_direction_bits\" : 4]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 5,
                "bs": "[\"multi_face_direction_bits\" : 5]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 6,
                "bs": "[\"multi_face_direction_bits\" : 6]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 7,
                "bs": "[\"multi_face_direction_bits\" : 7]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 8,
                "bs": "[\"multi_face_direction_bits\" : 8]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 9,
                "bs": "[\"multi_face_direction_bits\" : 9]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 10,
                "bs": "[\"multi_face_direction_bits\" : 10]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 11,
                "bs": "[\"multi_face_direction_bits\" : 11]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 12,
                "bs": "[\"multi_face_direction_bits\" : 12]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 13,
                "bs": "[\"multi_face_direction_bits\" : 13]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 14,
                "bs": "[\"multi_face_direction_bits\" : 14]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 15,
                "bs": "[\"multi_face_direction_bits\" : 15]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 16,
                "bs": "[\"multi_face_direction_bits\" : 16]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 17,
                "bs": "[\"multi_face_direction_bits\" : 17]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 18,
                "bs": "[\"multi_face_direction_bits\" : 18]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 19,
                "bs": "[\"multi_face_direction_bits\" : 19]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 20,
                "bs": "[\"multi_face_direction_bits\" : 20]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 21,
                "bs": "[\"multi_face_direction_bits\" : 21]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 22,
                "bs": "[\"multi_face_direction_bits\" : 22]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 23,
                "bs": "[\"multi_face_direction_bits\" : 23]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 24,
                "bs": "[\"multi_face_direction_bits\" : 24]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 25,
                "bs": "[\"multi_face_direction_bits\" : 25]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 26,
                "bs": "[\"multi_face_direction_bits\" : 26]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 27,
                "bs": "[\"multi_face_direction_bits\" : 27]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 28,
                "bs": "[\"multi_face_direction_bits\" : 28]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 29,
                "bs": "[\"multi_face_direction_bits\" : 29]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 30,
                "bs": "[\"multi_face_direction_bits\" : 30]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 31,
                "bs": "[\"multi_face_direction_bits\" : 31]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 32,
                "bs": "[\"multi_face_direction_bits\" : 32]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 33,
                "bs": "[\"multi_face_direction_bits\" : 33]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 34,
                "bs": "[\"multi_face_direction_bits\" : 34]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 35,
                "bs": "[\"multi_face_direction_bits\" : 35]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 36,
                "bs": "[\"multi_face_direction_bits\" : 36]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 37,
                "bs": "[\"multi_face_direction_bits\" : 37]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 38,
                "bs": "[\"multi_face_direction_bits\" : 38]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 39,
                "bs": "[\"multi_face_direction_bits\" : 39]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 40,
                "bs": "[\"multi_face_direction_bits\" : 40]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 41,
                "bs": "[\"multi_face_direction_bits\" : 41]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 42,
                "bs": "[\"multi_face_direction_bits\" : 42]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 43,
                "bs": "[\"multi_face_direction_bits\" : 43]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 44,
                "bs": "[\"multi_face_direction_bits\" : 44]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 45,
                "bs": "[\"multi_face_direction_bits\" : 45]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 46,
                "bs": "[\"multi_face_direction_bits\" : 46]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 47,
                "bs": "[\"multi_face_direction_bits\" : 47]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 48,
                "bs": "[\"multi_face_direction_bits\" : 48]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 49,
                "bs": "[\"multi_face_direction_bits\" : 49]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 50,
                "bs": "[\"multi_face_direction_bits\" : 50]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 51,
                "bs": "[\"multi_face_direction_bits\" : 51]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 52,
                "bs": "[\"multi_face_direction_bits\" : 52]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 53,
                "bs": "[\"multi_face_direction_bits\" : 53]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 54,
                "bs": "[\"multi_face_direction_bits\" : 54]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 55,
                "bs": "[\"multi_face_direction_bits\" : 55]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 56,
                "bs": "[\"multi_face_direction_bits\" : 56]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 57,
                "bs": "[\"multi_face_direction_bits\" : 57]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 58,
                "bs": "[\"multi_face_direction_bits\" : 58]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 59,
                "bs": "[\"multi_face_direction_bits\" : 59]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 60,
                "bs": "[\"multi_face_direction_bits\" : 60]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 61,
                "bs": "[\"multi_face_direction_bits\" : 61]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 62,
                "bs": "[\"multi_face_direction_bits\" : 62]"
            },
            {
                "id": "minecraft:glow_lichen",
                "dv": 63,
                "bs": "[\"multi_face_direction_bits\" : 63]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 0,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 1,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 2,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 3,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 4,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 5,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 6,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 7,
                "bs": "[\"rail_data_bit\" : 0, \"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 8,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 9,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 10,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 11,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 12,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 13,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 14,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:golden_rail",
                "dv": 15,
                "bs": "[\"rail_data_bit\" : 1, \"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:granite_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:gray_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:gray_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:gray_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:gray_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:green_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:green_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:green_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:green_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 0,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 1,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 2,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 3,
                "bs": "[\"attachment\" : \"standing\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 4,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 5,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 6,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 7,
                "bs": "[\"attachment\" : \"hanging\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 8,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 9,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 10,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 11,
                "bs": "[\"attachment\" : \"side\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 12,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 13,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 14,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:grindstone",
                "dv": 15,
                "bs": "[\"attachment\" : \"multiple\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:hard_stained_glass",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:hard_stained_glass_pane",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 0,
                "bs": "[\"deprecated\" : 0, \"direction\" : 0]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 1,
                "bs": "[\"deprecated\" : 1, \"direction\" : 0]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 2,
                "bs": "[\"deprecated\" : 2, \"direction\" : 0]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 3,
                "bs": "[\"deprecated\" : 3, \"direction\" : 0]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 4,
                "bs": "[\"deprecated\" : 0, \"direction\" : 1]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 5,
                "bs": "[\"deprecated\" : 1, \"direction\" : 1]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 6,
                "bs": "[\"deprecated\" : 2, \"direction\" : 1]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 7,
                "bs": "[\"deprecated\" : 3, \"direction\" : 1]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 8,
                "bs": "[\"deprecated\" : 0, \"direction\" : 2]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 9,
                "bs": "[\"deprecated\" : 1, \"direction\" : 2]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 10,
                "bs": "[\"deprecated\" : 2, \"direction\" : 2]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 11,
                "bs": "[\"deprecated\" : 3, \"direction\" : 2]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 12,
                "bs": "[\"deprecated\" : 0, \"direction\" : 3]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 13,
                "bs": "[\"deprecated\" : 1, \"direction\" : 3]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 14,
                "bs": "[\"deprecated\" : 2, \"direction\" : 3]"
            },
            {
                "id": "minecraft:hay_block",
                "dv": 15,
                "bs": "[\"deprecated\" : 3, \"direction\" : 3]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:heavy_weighted_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"toggle_bit\" : 0]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:hopper",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"toggle_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:iron_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"rotation\" : 0]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"rotation\" : 1]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 16,
                "bs": "[\"facing_direction\" : 0, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 17,
                "bs": "[\"facing_direction\" : 1, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 18,
                "bs": "[\"facing_direction\" : 2, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 19,
                "bs": "[\"facing_direction\" : 3, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 20,
                "bs": "[\"facing_direction\" : 4, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 21,
                "bs": "[\"facing_direction\" : 5, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 22,
                "bs": "[\"facing_direction\" : 6, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 23,
                "bs": "[\"facing_direction\" : 7, \"rotation\" : 2]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 24,
                "bs": "[\"facing_direction\" : 0, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 25,
                "bs": "[\"facing_direction\" : 1, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 26,
                "bs": "[\"facing_direction\" : 2, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 27,
                "bs": "[\"facing_direction\" : 3, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 28,
                "bs": "[\"facing_direction\" : 4, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 29,
                "bs": "[\"facing_direction\" : 5, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 30,
                "bs": "[\"facing_direction\" : 6, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jigsaw",
                "dv": 31,
                "bs": "[\"facing_direction\" : 7, \"rotation\" : 3]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:jungle_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:jungle_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:jungle_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:jungle_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:jungle_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 4,
                "bs": "[\"age\" : 4]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 5,
                "bs": "[\"age\" : 5]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 6,
                "bs": "[\"age\" : 6]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 7,
                "bs": "[\"age\" : 7]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 8,
                "bs": "[\"age\" : 8]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 9,
                "bs": "[\"age\" : 9]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 10,
                "bs": "[\"age\" : 10]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 11,
                "bs": "[\"age\" : 11]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 12,
                "bs": "[\"age\" : 12]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 13,
                "bs": "[\"age\" : 13]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 14,
                "bs": "[\"age\" : 14]"
            },
            {
                "id": "minecraft:kelp",
                "dv": 15,
                "bs": "[\"age\" : 15]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:ladder",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:lantern",
                "dv": 0,
                "bs": "[\"hanging\" : 0]"
            },
            {
                "id": "minecraft:lantern",
                "dv": 1,
                "bs": "[\"hanging\" : 1]"
            },
            {
                "id": "minecraft:lava",
                "dv": 0,
                "bs": "[\"liquid_depth\" : 0]"
            },
            {
                "id": "minecraft:lava",
                "dv": 1,
                "bs": "[\"liquid_depth\" : 1]"
            },
            {
                "id": "minecraft:lava",
                "dv": 2,
                "bs": "[\"liquid_depth\" : 2]"
            },
            {
                "id": "minecraft:lava",
                "dv": 3,
                "bs": "[\"liquid_depth\" : 3]"
            },
            {
                "id": "minecraft:lava",
                "dv": 4,
                "bs": "[\"liquid_depth\" : 4]"
            },
            {
                "id": "minecraft:lava",
                "dv": 5,
                "bs": "[\"liquid_depth\" : 5]"
            },
            {
                "id": "minecraft:lava",
                "dv": 6,
                "bs": "[\"liquid_depth\" : 6]"
            },
            {
                "id": "minecraft:lava",
                "dv": 7,
                "bs": "[\"liquid_depth\" : 7]"
            },
            {
                "id": "minecraft:lava",
                "dv": 8,
                "bs": "[\"liquid_depth\" : 8]"
            },
            {
                "id": "minecraft:lava",
                "dv": 9,
                "bs": "[\"liquid_depth\" : 9]"
            },
            {
                "id": "minecraft:lava",
                "dv": 10,
                "bs": "[\"liquid_depth\" : 10]"
            },
            {
                "id": "minecraft:lava",
                "dv": 11,
                "bs": "[\"liquid_depth\" : 11]"
            },
            {
                "id": "minecraft:lava",
                "dv": 12,
                "bs": "[\"liquid_depth\" : 12]"
            },
            {
                "id": "minecraft:lava",
                "dv": 13,
                "bs": "[\"liquid_depth\" : 13]"
            },
            {
                "id": "minecraft:lava",
                "dv": 14,
                "bs": "[\"liquid_depth\" : 14]"
            },
            {
                "id": "minecraft:lava",
                "dv": 15,
                "bs": "[\"liquid_depth\" : 15]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 0,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 0]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 1,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 1]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 2,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 2]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 3,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 3]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 4,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 4]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 5,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 5]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 6,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 6]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 7,
                "bs": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 7]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 8,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 0]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 9,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 1]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 10,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 2]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 11,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 3]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 12,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 4]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 13,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 5]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 14,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 6]"
            },
            {
                "id": "minecraft:lava_cauldron",
                "dv": 15,
                "bs": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 7]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 0,
                "bs": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 1,
                "bs": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 2,
                "bs": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 3,
                "bs": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 4,
                "bs": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 5,
                "bs": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 6,
                "bs": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 7,
                "bs": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 8,
                "bs": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 9,
                "bs": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 10,
                "bs": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 11,
                "bs": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 12,
                "bs": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 13,
                "bs": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 14,
                "bs": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves",
                "dv": 15,
                "bs": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "id": "minecraft:leaves2",
                "dv": 0,
                "bs": "[\"new_leaf_type\" : \"acacia\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves2",
                "dv": 1,
                "bs": "[\"new_leaf_type\" : \"dark_oak\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:leaves2",
                "dv": 2,
                "bs": "[\"new_leaf_type\" : \"acacia\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:lectern",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:lever",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:lever",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 0,
                "bs": "[\"block_light_level\" : 0]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 1,
                "bs": "[\"block_light_level\" : 1]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 2,
                "bs": "[\"block_light_level\" : 2]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 3,
                "bs": "[\"block_light_level\" : 3]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 4,
                "bs": "[\"block_light_level\" : 4]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 5,
                "bs": "[\"block_light_level\" : 5]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 6,
                "bs": "[\"block_light_level\" : 6]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 7,
                "bs": "[\"block_light_level\" : 7]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 8,
                "bs": "[\"block_light_level\" : 8]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 9,
                "bs": "[\"block_light_level\" : 9]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 10,
                "bs": "[\"block_light_level\" : 10]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 11,
                "bs": "[\"block_light_level\" : 11]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 12,
                "bs": "[\"block_light_level\" : 12]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 13,
                "bs": "[\"block_light_level\" : 13]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 14,
                "bs": "[\"block_light_level\" : 14]"
            },
            {
                "id": "minecraft:light_block",
                "dv": 15,
                "bs": "[\"block_light_level\" : 15]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_blue_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_blue_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:light_blue_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:light_blue_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_gray_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:light_gray_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:light_gray_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:light_weighted_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:lime_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:lime_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:lime_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:lime_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:lit_blast_furnace",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:lit_furnace",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:lit_pumpkin",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:lit_pumpkin",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:lit_pumpkin",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:lit_pumpkin",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:lit_smoker",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:log",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"old_log_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 1,
                "bs": "[\"direction\" : 0, \"old_log_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 2,
                "bs": "[\"direction\" : 0, \"old_log_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 3,
                "bs": "[\"direction\" : 0, \"old_log_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 4,
                "bs": "[\"direction\" : 1, \"old_log_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"old_log_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 6,
                "bs": "[\"direction\" : 1, \"old_log_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 7,
                "bs": "[\"direction\" : 1, \"old_log_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 8,
                "bs": "[\"direction\" : 2, \"old_log_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 9,
                "bs": "[\"direction\" : 2, \"old_log_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"old_log_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 11,
                "bs": "[\"direction\" : 2, \"old_log_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 12,
                "bs": "[\"direction\" : 3, \"old_log_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 13,
                "bs": "[\"direction\" : 3, \"old_log_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 14,
                "bs": "[\"direction\" : 3, \"old_log_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:log",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"old_log_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:log2",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"new_log_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:log2",
                "dv": 1,
                "bs": "[\"direction\" : 0, \"new_log_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:log2",
                "dv": 2,
                "bs": "[\"direction\" : 0, \"new_log_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:loom",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:loom",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:loom",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:loom",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:magenta_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:magenta_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:magenta_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:magenta_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:mangrove_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_log",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:mangrove_log",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:mangrove_log",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:mangrove_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:mangrove_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:mangrove_standing_sign",
                "dv": 16,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:mangrove_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:mangrove_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:mangrove_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:mangrove_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:mangrove_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:mangrove_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:mangrove_wood",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:mangrove_wood",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:mangrove_wood",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:melon_stem",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 0,
                "bs": "[\"monster_egg_stone_type\" : \"stone\"]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 1,
                "bs": "[\"monster_egg_stone_type\" : \"cobblestone\"]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 2,
                "bs": "[\"monster_egg_stone_type\" : \"stone_brick\"]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 3,
                "bs": "[\"monster_egg_stone_type\" : \"mossy_stone_brick\"]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 4,
                "bs": "[\"monster_egg_stone_type\" : \"cracked_stone_brick\"]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 5,
                "bs": "[\"monster_egg_stone_type\" : \"chiseled_stone_brick\"]"
            },
            {
                "id": "minecraft:monster_egg",
                "dv": 6,
                "bs": "[\"monster_egg_stone_type\" : \"stone\"]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:mossy_cobblestone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:mossy_stone_brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:mud_brick_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:mud_brick_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:muddy_mangrove_roots",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:muddy_mangrove_roots",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:muddy_mangrove_roots",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:nether_brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:nether_wart",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:nether_wart",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:nether_wart",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:nether_wart",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:normal_stone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:oak_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:observer",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:observer",
                "dv": 8,
                "bs": "[\"facing_direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 9,
                "bs": "[\"facing_direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 10,
                "bs": "[\"facing_direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 11,
                "bs": "[\"facing_direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 12,
                "bs": "[\"facing_direction\" : 4, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 13,
                "bs": "[\"facing_direction\" : 5, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 14,
                "bs": "[\"facing_direction\" : 6, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:observer",
                "dv": 15,
                "bs": "[\"facing_direction\" : 7, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:orange_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:orange_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:orange_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:orange_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:oxidized_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:oxidized_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:pink_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:pink_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:pink_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:pink_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:piston",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:piston",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:piston",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:piston",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:piston",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:piston",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:piston",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:piston",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:piston_arm_collision",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:planks",
                "dv": 0,
                "bs": "[\"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:planks",
                "dv": 1,
                "bs": "[\"wood_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:planks",
                "dv": 2,
                "bs": "[\"wood_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:planks",
                "dv": 3,
                "bs": "[\"wood_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:planks",
                "dv": 4,
                "bs": "[\"wood_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:planks",
                "dv": 5,
                "bs": "[\"wood_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:planks",
                "dv": 6,
                "bs": "[\"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_andesite_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_basalt",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:polished_basalt",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:polished_basalt",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:polished_blackstone_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:polished_blackstone_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:polished_blackstone_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_blackstone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_deepslate_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:polished_deepslate_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_diorite_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:polished_granite_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:portal",
                "dv": 0,
                "bs": "[\"portal_axis\" : \"unknown\"]"
            },
            {
                "id": "minecraft:portal",
                "dv": 1,
                "bs": "[\"portal_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:portal",
                "dv": 2,
                "bs": "[\"portal_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:portal",
                "dv": 3,
                "bs": "[\"portal_axis\" : \"unknown\"]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:potatoes",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_comparator",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:powered_repeater",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:prismarine",
                "dv": 0,
                "bs": "[\"prismarine_block_type\" : \"default\"]"
            },
            {
                "id": "minecraft:prismarine",
                "dv": 1,
                "bs": "[\"prismarine_block_type\" : \"dark\"]"
            },
            {
                "id": "minecraft:prismarine",
                "dv": 2,
                "bs": "[\"prismarine_block_type\" : \"bricks\"]"
            },
            {
                "id": "minecraft:prismarine",
                "dv": 3,
                "bs": "[\"prismarine_block_type\" : \"default\"]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:prismarine_bricks_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:prismarine_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:pumpkin",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:pumpkin",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:pumpkin",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:pumpkin",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:pumpkin_stem",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:purple_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:purple_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:purple_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:purple_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 0,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 1,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 2,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 3,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 4,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 5,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 6,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 7,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 8,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 9,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 10,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 11,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 12,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 13,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 14,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:purpur_block",
                "dv": 15,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:purpur_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 0,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 1,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 2,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 3,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 0]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 4,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 5,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 6,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 7,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 1]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 8,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 9,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 10,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 11,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 2]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 12,
                "bs": "[\"chisel_type\" : \"default\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 13,
                "bs": "[\"chisel_type\" : \"chiseled\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 14,
                "bs": "[\"chisel_type\" : \"lines\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:quartz_block",
                "dv": 15,
                "bs": "[\"chisel_type\" : \"smooth\", \"direction\" : 3]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:quartz_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:rail",
                "dv": 0,
                "bs": "[\"rail_direction\" : 0]"
            },
            {
                "id": "minecraft:rail",
                "dv": 1,
                "bs": "[\"rail_direction\" : 1]"
            },
            {
                "id": "minecraft:rail",
                "dv": 2,
                "bs": "[\"rail_direction\" : 2]"
            },
            {
                "id": "minecraft:rail",
                "dv": 3,
                "bs": "[\"rail_direction\" : 3]"
            },
            {
                "id": "minecraft:rail",
                "dv": 4,
                "bs": "[\"rail_direction\" : 4]"
            },
            {
                "id": "minecraft:rail",
                "dv": 5,
                "bs": "[\"rail_direction\" : 5]"
            },
            {
                "id": "minecraft:rail",
                "dv": 6,
                "bs": "[\"rail_direction\" : 6]"
            },
            {
                "id": "minecraft:rail",
                "dv": 7,
                "bs": "[\"rail_direction\" : 7]"
            },
            {
                "id": "minecraft:rail",
                "dv": 8,
                "bs": "[\"rail_direction\" : 8]"
            },
            {
                "id": "minecraft:rail",
                "dv": 9,
                "bs": "[\"rail_direction\" : 9]"
            },
            {
                "id": "minecraft:rail",
                "dv": 10,
                "bs": "[\"rail_direction\" : 10]"
            },
            {
                "id": "minecraft:rail",
                "dv": 11,
                "bs": "[\"rail_direction\" : 11]"
            },
            {
                "id": "minecraft:rail",
                "dv": 12,
                "bs": "[\"rail_direction\" : 12]"
            },
            {
                "id": "minecraft:rail",
                "dv": 13,
                "bs": "[\"rail_direction\" : 13]"
            },
            {
                "id": "minecraft:rail",
                "dv": 14,
                "bs": "[\"rail_direction\" : 14]"
            },
            {
                "id": "minecraft:rail",
                "dv": 15,
                "bs": "[\"rail_direction\" : 15]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:red_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:red_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:red_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 0,
                "bs": "[\"flower_type\" : \"poppy\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 1,
                "bs": "[\"flower_type\" : \"orchid\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 2,
                "bs": "[\"flower_type\" : \"allium\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 3,
                "bs": "[\"flower_type\" : \"houstonia\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 4,
                "bs": "[\"flower_type\" : \"tulip_red\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 5,
                "bs": "[\"flower_type\" : \"tulip_orange\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 6,
                "bs": "[\"flower_type\" : \"tulip_white\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 7,
                "bs": "[\"flower_type\" : \"tulip_pink\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 8,
                "bs": "[\"flower_type\" : \"oxeye\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 9,
                "bs": "[\"flower_type\" : \"cornflower\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 10,
                "bs": "[\"flower_type\" : \"lily_of_the_valley\"]"
            },
            {
                "id": "minecraft:red_flower",
                "dv": 11,
                "bs": "[\"flower_type\" : \"poppy\"]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:red_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 0,
                "bs": "[\"huge_mushroom_bits\" : 0]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 1,
                "bs": "[\"huge_mushroom_bits\" : 1]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 2,
                "bs": "[\"huge_mushroom_bits\" : 2]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 3,
                "bs": "[\"huge_mushroom_bits\" : 3]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 4,
                "bs": "[\"huge_mushroom_bits\" : 4]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 5,
                "bs": "[\"huge_mushroom_bits\" : 5]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 6,
                "bs": "[\"huge_mushroom_bits\" : 6]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 7,
                "bs": "[\"huge_mushroom_bits\" : 7]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 8,
                "bs": "[\"huge_mushroom_bits\" : 8]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 9,
                "bs": "[\"huge_mushroom_bits\" : 9]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 10,
                "bs": "[\"huge_mushroom_bits\" : 10]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 11,
                "bs": "[\"huge_mushroom_bits\" : 11]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 12,
                "bs": "[\"huge_mushroom_bits\" : 12]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 13,
                "bs": "[\"huge_mushroom_bits\" : 13]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 14,
                "bs": "[\"huge_mushroom_bits\" : 14]"
            },
            {
                "id": "minecraft:red_mushroom_block",
                "dv": 15,
                "bs": "[\"huge_mushroom_bits\" : 15]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:red_nether_brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:red_sandstone",
                "dv": 0,
                "bs": "[\"sand_stone_type\" : \"default\"]"
            },
            {
                "id": "minecraft:red_sandstone",
                "dv": 1,
                "bs": "[\"sand_stone_type\" : \"heiroglyphs\"]"
            },
            {
                "id": "minecraft:red_sandstone",
                "dv": 2,
                "bs": "[\"sand_stone_type\" : \"cut\"]"
            },
            {
                "id": "minecraft:red_sandstone",
                "dv": 3,
                "bs": "[\"sand_stone_type\" : \"smooth\"]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:red_sandstone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 0,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 1,
                "bs": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 2,
                "bs": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 3,
                "bs": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 4,
                "bs": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 5,
                "bs": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "id": "minecraft:redstone_torch",
                "dv": 6,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:redstone_wire",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 4,
                "bs": "[\"age\" : 4]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 5,
                "bs": "[\"age\" : 5]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 6,
                "bs": "[\"age\" : 6]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 7,
                "bs": "[\"age\" : 7]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 8,
                "bs": "[\"age\" : 8]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 9,
                "bs": "[\"age\" : 9]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 10,
                "bs": "[\"age\" : 10]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 11,
                "bs": "[\"age\" : 11]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 12,
                "bs": "[\"age\" : 12]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 13,
                "bs": "[\"age\" : 13]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 14,
                "bs": "[\"age\" : 14]"
            },
            {
                "id": "minecraft:reeds",
                "dv": 15,
                "bs": "[\"age\" : 15]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 0,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 1,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 2,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 3,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 4,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 5,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 6,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 7,
                "bs": "[\"conditional_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 8,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 9,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 10,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 11,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 12,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 13,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 14,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:repeating_command_block",
                "dv": 15,
                "bs": "[\"conditional_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:respawn_anchor",
                "dv": 0,
                "bs": "[\"respawn_anchor_charge\" : 0]"
            },
            {
                "id": "minecraft:respawn_anchor",
                "dv": 1,
                "bs": "[\"respawn_anchor_charge\" : 1]"
            },
            {
                "id": "minecraft:respawn_anchor",
                "dv": 2,
                "bs": "[\"respawn_anchor_charge\" : 2]"
            },
            {
                "id": "minecraft:respawn_anchor",
                "dv": 3,
                "bs": "[\"respawn_anchor_charge\" : 3]"
            },
            {
                "id": "minecraft:respawn_anchor",
                "dv": 4,
                "bs": "[\"respawn_anchor_charge\" : 4]"
            },
            {
                "id": "minecraft:sand",
                "dv": 0,
                "bs": "[\"sand_type\" : \"normal\"]"
            },
            {
                "id": "minecraft:sand",
                "dv": 1,
                "bs": "[\"sand_type\" : \"red\"]"
            },
            {
                "id": "minecraft:sandstone",
                "dv": 0,
                "bs": "[\"sand_stone_type\" : \"default\"]"
            },
            {
                "id": "minecraft:sandstone",
                "dv": 1,
                "bs": "[\"sand_stone_type\" : \"heiroglyphs\"]"
            },
            {
                "id": "minecraft:sandstone",
                "dv": 2,
                "bs": "[\"sand_stone_type\" : \"cut\"]"
            },
            {
                "id": "minecraft:sandstone",
                "dv": 3,
                "bs": "[\"sand_stone_type\" : \"smooth\"]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:sandstone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 0,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 1,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 2,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 3,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 4,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 5,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:sapling",
                "dv": 6,
                "bs": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 0,
                "bs": "[\"stability\" : 0, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 1,
                "bs": "[\"stability\" : 1, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 2,
                "bs": "[\"stability\" : 2, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 3,
                "bs": "[\"stability\" : 3, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 4,
                "bs": "[\"stability\" : 4, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 5,
                "bs": "[\"stability\" : 5, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 6,
                "bs": "[\"stability\" : 6, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 7,
                "bs": "[\"stability\" : 7, \"stability_check\" : 0]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 8,
                "bs": "[\"stability\" : 0, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 9,
                "bs": "[\"stability\" : 1, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 10,
                "bs": "[\"stability\" : 2, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 11,
                "bs": "[\"stability\" : 3, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 12,
                "bs": "[\"stability\" : 4, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 13,
                "bs": "[\"stability\" : 5, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 14,
                "bs": "[\"stability\" : 6, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:scaffolding",
                "dv": 15,
                "bs": "[\"stability\" : 7, \"stability_check\" : 1]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 0,
                "bs": "[\"cluster_count\" : 0, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 1,
                "bs": "[\"cluster_count\" : 1, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 2,
                "bs": "[\"cluster_count\" : 2, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 3,
                "bs": "[\"cluster_count\" : 3, \"dead_bit\" : 0]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 4,
                "bs": "[\"cluster_count\" : 0, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 5,
                "bs": "[\"cluster_count\" : 1, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 6,
                "bs": "[\"cluster_count\" : 2, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:sea_pickle",
                "dv": 7,
                "bs": "[\"cluster_count\" : 3, \"dead_bit\" : 1]"
            },
            {
                "id": "minecraft:seagrass",
                "dv": 0,
                "bs": "[\"sea_grass_type\" : \"default\"]"
            },
            {
                "id": "minecraft:seagrass",
                "dv": 1,
                "bs": "[\"sea_grass_type\" : \"double_top\"]"
            },
            {
                "id": "minecraft:seagrass",
                "dv": 2,
                "bs": "[\"sea_grass_type\" : \"double_bot\"]"
            },
            {
                "id": "minecraft:seagrass",
                "dv": 3,
                "bs": "[\"sea_grass_type\" : \"default\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:shulker_box",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:silver_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:skull",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:skull",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:skull",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:skull",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:skull",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:skull",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:skull",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:skull",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:smoker",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:smooth_quartz_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:smooth_red_sandstone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:smooth_sandstone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 0,
                "bs": "[\"covered_bit\" : 0, \"height\" : 0]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 1,
                "bs": "[\"covered_bit\" : 0, \"height\" : 1]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 2,
                "bs": "[\"covered_bit\" : 0, \"height\" : 2]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 3,
                "bs": "[\"covered_bit\" : 0, \"height\" : 3]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 4,
                "bs": "[\"covered_bit\" : 0, \"height\" : 4]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 5,
                "bs": "[\"covered_bit\" : 0, \"height\" : 5]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 6,
                "bs": "[\"covered_bit\" : 0, \"height\" : 6]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 7,
                "bs": "[\"covered_bit\" : 0, \"height\" : 7]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 8,
                "bs": "[\"covered_bit\" : 1, \"height\" : 0]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 9,
                "bs": "[\"covered_bit\" : 1, \"height\" : 1]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 10,
                "bs": "[\"covered_bit\" : 1, \"height\" : 2]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 11,
                "bs": "[\"covered_bit\" : 1, \"height\" : 3]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 12,
                "bs": "[\"covered_bit\" : 1, \"height\" : 4]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 13,
                "bs": "[\"covered_bit\" : 1, \"height\" : 5]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 14,
                "bs": "[\"covered_bit\" : 1, \"height\" : 6]"
            },
            {
                "id": "minecraft:snow_layer",
                "dv": 15,
                "bs": "[\"covered_bit\" : 1, \"height\" : 7]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 0,
                "bs": "[\"age\" : 0]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 1,
                "bs": "[\"age\" : 1]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 2,
                "bs": "[\"age\" : 2]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 3,
                "bs": "[\"age\" : 3]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 4,
                "bs": "[\"age\" : 4]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 5,
                "bs": "[\"age\" : 5]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 6,
                "bs": "[\"age\" : 6]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 7,
                "bs": "[\"age\" : 7]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 8,
                "bs": "[\"age\" : 8]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 9,
                "bs": "[\"age\" : 9]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 10,
                "bs": "[\"age\" : 10]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 11,
                "bs": "[\"age\" : 11]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 12,
                "bs": "[\"age\" : 12]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 13,
                "bs": "[\"age\" : 13]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 14,
                "bs": "[\"age\" : 14]"
            },
            {
                "id": "minecraft:soul_fire",
                "dv": 15,
                "bs": "[\"age\" : 15]"
            },
            {
                "id": "minecraft:soul_lantern",
                "dv": 0,
                "bs": "[\"hanging\" : 0]"
            },
            {
                "id": "minecraft:soul_lantern",
                "dv": 1,
                "bs": "[\"hanging\" : 1]"
            },
            {
                "id": "minecraft:sponge",
                "dv": 0,
                "bs": "[\"sponge_type\" : \"dry\"]"
            },
            {
                "id": "minecraft:sponge",
                "dv": 1,
                "bs": "[\"sponge_type\" : \"wet\"]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:spruce_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:spruce_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:spruce_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:spruce_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:spruce_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:stained_glass",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:stained_glass_pane",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:stained_hardened_clay",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:standing_banner",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:sticky_piston",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:sticky_piston_arm_collision",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:stone",
                "dv": 0,
                "bs": "[\"stone_type\" : \"stone\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 1,
                "bs": "[\"stone_type\" : \"granite\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 2,
                "bs": "[\"stone_type\" : \"granite_smooth\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 3,
                "bs": "[\"stone_type\" : \"diorite\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 4,
                "bs": "[\"stone_type\" : \"diorite_smooth\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 5,
                "bs": "[\"stone_type\" : \"andesite\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 6,
                "bs": "[\"stone_type\" : \"andesite_smooth\"]"
            },
            {
                "id": "minecraft:stone",
                "dv": 7,
                "bs": "[\"stone_type\" : \"stone\"]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 0,
                "bs": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 1,
                "bs": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 2,
                "bs": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 3,
                "bs": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 4,
                "bs": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 5,
                "bs": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 6,
                "bs": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 7,
                "bs": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 8,
                "bs": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 9,
                "bs": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 10,
                "bs": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 11,
                "bs": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 12,
                "bs": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 13,
                "bs": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 14,
                "bs": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab",
                "dv": 15,
                "bs": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 0,
                "bs": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 1,
                "bs": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 2,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 3,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 4,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 5,
                "bs": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 6,
                "bs": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 7,
                "bs": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 8,
                "bs": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 9,
                "bs": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 10,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 11,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 12,
                "bs": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 13,
                "bs": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 14,
                "bs": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab2",
                "dv": 15,
                "bs": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 0,
                "bs": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 1,
                "bs": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 2,
                "bs": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 3,
                "bs": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 4,
                "bs": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 5,
                "bs": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 6,
                "bs": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 7,
                "bs": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 8,
                "bs": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 9,
                "bs": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 10,
                "bs": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 11,
                "bs": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 12,
                "bs": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 13,
                "bs": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 14,
                "bs": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab3",
                "dv": 15,
                "bs": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:stone_block_slab4",
                "dv": 0,
                "bs": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab4",
                "dv": 1,
                "bs": "[\"stone_slab_type_4\" : \"smooth_quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab4",
                "dv": 2,
                "bs": "[\"stone_slab_type_4\" : \"stone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab4",
                "dv": 3,
                "bs": "[\"stone_slab_type_4\" : \"cut_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab4",
                "dv": 4,
                "bs": "[\"stone_slab_type_4\" : \"cut_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_block_slab4",
                "dv": 5,
                "bs": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:stone_brick_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:stone_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:stone_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:stone_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:stonebrick",
                "dv": 0,
                "bs": "[\"stone_brick_type\" : \"default\"]"
            },
            {
                "id": "minecraft:stonebrick",
                "dv": 1,
                "bs": "[\"stone_brick_type\" : \"mossy\"]"
            },
            {
                "id": "minecraft:stonebrick",
                "dv": 2,
                "bs": "[\"stone_brick_type\" : \"cracked\"]"
            },
            {
                "id": "minecraft:stonebrick",
                "dv": 3,
                "bs": "[\"stone_brick_type\" : \"chiseled\"]"
            },
            {
                "id": "minecraft:stonebrick",
                "dv": 4,
                "bs": "[\"stone_brick_type\" : \"smooth\"]"
            },
            {
                "id": "minecraft:stonebrick",
                "dv": 5,
                "bs": "[\"stone_brick_type\" : \"default\"]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:stonecutter_block",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:stripped_acacia_log",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:stripped_acacia_log",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:stripped_acacia_log",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:stripped_acacia_log",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:stripped_birch_log",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:stripped_birch_log",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:stripped_birch_log",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:stripped_birch_log",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:stripped_crimson_hyphae",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:stripped_crimson_hyphae",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:stripped_crimson_hyphae",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:stripped_crimson_stem",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:stripped_crimson_stem",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:stripped_crimson_stem",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:stripped_dark_oak_log",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:stripped_dark_oak_log",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:stripped_dark_oak_log",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:stripped_dark_oak_log",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:stripped_jungle_log",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:stripped_jungle_log",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:stripped_jungle_log",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:stripped_jungle_log",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:stripped_mangrove_log",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:stripped_mangrove_log",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:stripped_mangrove_log",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:stripped_mangrove_wood",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:stripped_mangrove_wood",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:stripped_mangrove_wood",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:stripped_oak_log",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:stripped_oak_log",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:stripped_oak_log",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:stripped_oak_log",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:stripped_spruce_log",
                "dv": 0,
                "bs": "[\"direction\" : 0]"
            },
            {
                "id": "minecraft:stripped_spruce_log",
                "dv": 1,
                "bs": "[\"direction\" : 1]"
            },
            {
                "id": "minecraft:stripped_spruce_log",
                "dv": 2,
                "bs": "[\"direction\" : 2]"
            },
            {
                "id": "minecraft:stripped_spruce_log",
                "dv": 3,
                "bs": "[\"direction\" : 3]"
            },
            {
                "id": "minecraft:stripped_warped_hyphae",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:stripped_warped_hyphae",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:stripped_warped_hyphae",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:stripped_warped_stem",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:stripped_warped_stem",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:stripped_warped_stem",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 0,
                "bs": "[\"structure_block_type\" : \"data\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 1,
                "bs": "[\"structure_block_type\" : \"save\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 2,
                "bs": "[\"structure_block_type\" : \"load\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 3,
                "bs": "[\"structure_block_type\" : \"corner\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 4,
                "bs": "[\"structure_block_type\" : \"invalid\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 5,
                "bs": "[\"structure_block_type\" : \"export\"]"
            },
            {
                "id": "minecraft:structure_block",
                "dv": 6,
                "bs": "[\"structure_block_type\" : \"data\"]"
            },
            {
                "id": "minecraft:structure_void",
                "dv": 0,
                "bs": "[\"structure_void_type\" : \"void\"]"
            },
            {
                "id": "minecraft:structure_void",
                "dv": 1,
                "bs": "[\"structure_void_type\" : \"air\"]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:sweet_berry_bush",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:tallgrass",
                "dv": 0,
                "bs": "[\"tall_grass_type\" : \"default\"]"
            },
            {
                "id": "minecraft:tallgrass",
                "dv": 1,
                "bs": "[\"tall_grass_type\" : \"tall\"]"
            },
            {
                "id": "minecraft:tallgrass",
                "dv": 2,
                "bs": "[\"tall_grass_type\" : \"fern\"]"
            },
            {
                "id": "minecraft:tallgrass",
                "dv": 3,
                "bs": "[\"tall_grass_type\" : \"snow\"]"
            },
            {
                "id": "minecraft:tnt",
                "dv": 0,
                "bs": "[\"allow_underwater_bit\" : 0, \"explode_bit\" : 0]"
            },
            {
                "id": "minecraft:tnt",
                "dv": 1,
                "bs": "[\"allow_underwater_bit\" : 0, \"explode_bit\" : 1]"
            },
            {
                "id": "minecraft:tnt",
                "dv": 2,
                "bs": "[\"allow_underwater_bit\" : 1, \"explode_bit\" : 0]"
            },
            {
                "id": "minecraft:tnt",
                "dv": 3,
                "bs": "[\"allow_underwater_bit\" : 1, \"explode_bit\" : 1]"
            },
            {
                "id": "minecraft:torch",
                "dv": 0,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:torch",
                "dv": 1,
                "bs": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "id": "minecraft:torch",
                "dv": 2,
                "bs": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "id": "minecraft:torch",
                "dv": 3,
                "bs": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "id": "minecraft:torch",
                "dv": 4,
                "bs": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "id": "minecraft:torch",
                "dv": 5,
                "bs": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "id": "minecraft:torch",
                "dv": 6,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:trapped_chest",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 0,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 1,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 2,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 3,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 4,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 5,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 6,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 7,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 8,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 9,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 10,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 11,
                "bs": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 12,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 13,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 14,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:trip_wire",
                "dv": 15,
                "bs": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 0,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 1,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 2,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 3,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 4,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 5,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 6,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 7,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 8,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 9,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 10,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 11,
                "bs": "[\"attached_bit\" : 0, \"direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 12,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 13,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 14,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:tripwire_hook",
                "dv": 15,
                "bs": "[\"attached_bit\" : 1, \"direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 0,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 1,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 2,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 3,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 4,
                "bs": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 5,
                "bs": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 6,
                "bs": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 7,
                "bs": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 8,
                "bs": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 9,
                "bs": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 10,
                "bs": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 11,
                "bs": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 12,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 13,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 14,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "id": "minecraft:turtle_egg",
                "dv": 15,
                "bs": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 0,
                "bs": "[\"twisting_vines_age\" : 0]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 1,
                "bs": "[\"twisting_vines_age\" : 1]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 2,
                "bs": "[\"twisting_vines_age\" : 2]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 3,
                "bs": "[\"twisting_vines_age\" : 3]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 4,
                "bs": "[\"twisting_vines_age\" : 4]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 5,
                "bs": "[\"twisting_vines_age\" : 5]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 6,
                "bs": "[\"twisting_vines_age\" : 6]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 7,
                "bs": "[\"twisting_vines_age\" : 7]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 8,
                "bs": "[\"twisting_vines_age\" : 8]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 9,
                "bs": "[\"twisting_vines_age\" : 9]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 10,
                "bs": "[\"twisting_vines_age\" : 10]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 11,
                "bs": "[\"twisting_vines_age\" : 11]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 12,
                "bs": "[\"twisting_vines_age\" : 12]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 13,
                "bs": "[\"twisting_vines_age\" : 13]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 14,
                "bs": "[\"twisting_vines_age\" : 14]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 15,
                "bs": "[\"twisting_vines_age\" : 15]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 16,
                "bs": "[\"twisting_vines_age\" : 16]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 17,
                "bs": "[\"twisting_vines_age\" : 17]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 18,
                "bs": "[\"twisting_vines_age\" : 18]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 19,
                "bs": "[\"twisting_vines_age\" : 19]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 20,
                "bs": "[\"twisting_vines_age\" : 20]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 21,
                "bs": "[\"twisting_vines_age\" : 21]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 22,
                "bs": "[\"twisting_vines_age\" : 22]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 23,
                "bs": "[\"twisting_vines_age\" : 23]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 24,
                "bs": "[\"twisting_vines_age\" : 24]"
            },
            {
                "id": "minecraft:twisting_vines",
                "dv": 25,
                "bs": "[\"twisting_vines_age\" : 25]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 0,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 1,
                "bs": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 2,
                "bs": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 3,
                "bs": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 4,
                "bs": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 5,
                "bs": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "id": "minecraft:underwater_torch",
                "dv": 6,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 0,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 1,
                "bs": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 2,
                "bs": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 3,
                "bs": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 4,
                "bs": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 5,
                "bs": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "id": "minecraft:unlit_redstone_torch",
                "dv": 6,
                "bs": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_comparator",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 0]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 1]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 2]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:unpowered_repeater",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"repeater_delay\" : 3]"
            },
            {
                "id": "minecraft:vine",
                "dv": 0,
                "bs": "[\"vine_direction_bits\" : 0]"
            },
            {
                "id": "minecraft:vine",
                "dv": 1,
                "bs": "[\"vine_direction_bits\" : 1]"
            },
            {
                "id": "minecraft:vine",
                "dv": 2,
                "bs": "[\"vine_direction_bits\" : 2]"
            },
            {
                "id": "minecraft:vine",
                "dv": 3,
                "bs": "[\"vine_direction_bits\" : 3]"
            },
            {
                "id": "minecraft:vine",
                "dv": 4,
                "bs": "[\"vine_direction_bits\" : 4]"
            },
            {
                "id": "minecraft:vine",
                "dv": 5,
                "bs": "[\"vine_direction_bits\" : 5]"
            },
            {
                "id": "minecraft:vine",
                "dv": 6,
                "bs": "[\"vine_direction_bits\" : 6]"
            },
            {
                "id": "minecraft:vine",
                "dv": 7,
                "bs": "[\"vine_direction_bits\" : 7]"
            },
            {
                "id": "minecraft:vine",
                "dv": 8,
                "bs": "[\"vine_direction_bits\" : 8]"
            },
            {
                "id": "minecraft:vine",
                "dv": 9,
                "bs": "[\"vine_direction_bits\" : 9]"
            },
            {
                "id": "minecraft:vine",
                "dv": 10,
                "bs": "[\"vine_direction_bits\" : 10]"
            },
            {
                "id": "minecraft:vine",
                "dv": 11,
                "bs": "[\"vine_direction_bits\" : 11]"
            },
            {
                "id": "minecraft:vine",
                "dv": 12,
                "bs": "[\"vine_direction_bits\" : 12]"
            },
            {
                "id": "minecraft:vine",
                "dv": 13,
                "bs": "[\"vine_direction_bits\" : 13]"
            },
            {
                "id": "minecraft:vine",
                "dv": 14,
                "bs": "[\"vine_direction_bits\" : 14]"
            },
            {
                "id": "minecraft:vine",
                "dv": 15,
                "bs": "[\"vine_direction_bits\" : 15]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:wall_banner",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:warped_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_fence_gate",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_hyphae",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:warped_hyphae",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:warped_hyphae",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:warped_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 0,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 1,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 2,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 3,
                "bs": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 4,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 5,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 6,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "id": "minecraft:warped_stairs",
                "dv": 7,
                "bs": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 0,
                "bs": "[\"ground_sign_direction\" : 0]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 1,
                "bs": "[\"ground_sign_direction\" : 1]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 2,
                "bs": "[\"ground_sign_direction\" : 2]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 3,
                "bs": "[\"ground_sign_direction\" : 3]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 4,
                "bs": "[\"ground_sign_direction\" : 4]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 5,
                "bs": "[\"ground_sign_direction\" : 5]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 6,
                "bs": "[\"ground_sign_direction\" : 6]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 7,
                "bs": "[\"ground_sign_direction\" : 7]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 8,
                "bs": "[\"ground_sign_direction\" : 8]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 9,
                "bs": "[\"ground_sign_direction\" : 9]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 10,
                "bs": "[\"ground_sign_direction\" : 10]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 11,
                "bs": "[\"ground_sign_direction\" : 11]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 12,
                "bs": "[\"ground_sign_direction\" : 12]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 13,
                "bs": "[\"ground_sign_direction\" : 13]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 14,
                "bs": "[\"ground_sign_direction\" : 14]"
            },
            {
                "id": "minecraft:warped_standing_sign",
                "dv": 15,
                "bs": "[\"ground_sign_direction\" : 15]"
            },
            {
                "id": "minecraft:warped_stem",
                "dv": 0,
                "bs": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "id": "minecraft:warped_stem",
                "dv": 1,
                "bs": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "id": "minecraft:warped_stem",
                "dv": 2,
                "bs": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_trapdoor",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:warped_wall_sign",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:water",
                "dv": 0,
                "bs": "[\"liquid_depth\" : 0]"
            },
            {
                "id": "minecraft:water",
                "dv": 1,
                "bs": "[\"liquid_depth\" : 1]"
            },
            {
                "id": "minecraft:water",
                "dv": 2,
                "bs": "[\"liquid_depth\" : 2]"
            },
            {
                "id": "minecraft:water",
                "dv": 3,
                "bs": "[\"liquid_depth\" : 3]"
            },
            {
                "id": "minecraft:water",
                "dv": 4,
                "bs": "[\"liquid_depth\" : 4]"
            },
            {
                "id": "minecraft:water",
                "dv": 5,
                "bs": "[\"liquid_depth\" : 5]"
            },
            {
                "id": "minecraft:water",
                "dv": 6,
                "bs": "[\"liquid_depth\" : 6]"
            },
            {
                "id": "minecraft:water",
                "dv": 7,
                "bs": "[\"liquid_depth\" : 7]"
            },
            {
                "id": "minecraft:water",
                "dv": 8,
                "bs": "[\"liquid_depth\" : 8]"
            },
            {
                "id": "minecraft:water",
                "dv": 9,
                "bs": "[\"liquid_depth\" : 9]"
            },
            {
                "id": "minecraft:water",
                "dv": 10,
                "bs": "[\"liquid_depth\" : 10]"
            },
            {
                "id": "minecraft:water",
                "dv": 11,
                "bs": "[\"liquid_depth\" : 11]"
            },
            {
                "id": "minecraft:water",
                "dv": 12,
                "bs": "[\"liquid_depth\" : 12]"
            },
            {
                "id": "minecraft:water",
                "dv": 13,
                "bs": "[\"liquid_depth\" : 13]"
            },
            {
                "id": "minecraft:water",
                "dv": 14,
                "bs": "[\"liquid_depth\" : 14]"
            },
            {
                "id": "minecraft:water",
                "dv": 15,
                "bs": "[\"liquid_depth\" : 15]"
            },
            {
                "id": "minecraft:waxed_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:waxed_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:waxed_exposed_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:waxed_exposed_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:waxed_oxidized_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:waxed_oxidized_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:waxed_weathered_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:waxed_weathered_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:weathered_cut_copper_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0]"
            },
            {
                "id": "minecraft:weathered_cut_copper_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 1]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 0,
                "bs": "[\"weeping_vines_age\" : 0]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 1,
                "bs": "[\"weeping_vines_age\" : 1]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 2,
                "bs": "[\"weeping_vines_age\" : 2]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 3,
                "bs": "[\"weeping_vines_age\" : 3]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 4,
                "bs": "[\"weeping_vines_age\" : 4]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 5,
                "bs": "[\"weeping_vines_age\" : 5]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 6,
                "bs": "[\"weeping_vines_age\" : 6]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 7,
                "bs": "[\"weeping_vines_age\" : 7]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 8,
                "bs": "[\"weeping_vines_age\" : 8]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 9,
                "bs": "[\"weeping_vines_age\" : 9]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 10,
                "bs": "[\"weeping_vines_age\" : 10]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 11,
                "bs": "[\"weeping_vines_age\" : 11]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 12,
                "bs": "[\"weeping_vines_age\" : 12]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 13,
                "bs": "[\"weeping_vines_age\" : 13]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 14,
                "bs": "[\"weeping_vines_age\" : 14]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 15,
                "bs": "[\"weeping_vines_age\" : 15]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 16,
                "bs": "[\"weeping_vines_age\" : 16]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 17,
                "bs": "[\"weeping_vines_age\" : 17]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 18,
                "bs": "[\"weeping_vines_age\" : 18]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 19,
                "bs": "[\"weeping_vines_age\" : 19]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 20,
                "bs": "[\"weeping_vines_age\" : 20]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 21,
                "bs": "[\"weeping_vines_age\" : 21]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 22,
                "bs": "[\"weeping_vines_age\" : 22]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 23,
                "bs": "[\"weeping_vines_age\" : 23]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 24,
                "bs": "[\"weeping_vines_age\" : 24]"
            },
            {
                "id": "minecraft:weeping_vines",
                "dv": 25,
                "bs": "[\"weeping_vines_age\" : 25]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 0,
                "bs": "[\"growth\" : 0]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 1,
                "bs": "[\"growth\" : 1]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 2,
                "bs": "[\"growth\" : 2]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 3,
                "bs": "[\"growth\" : 3]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 4,
                "bs": "[\"growth\" : 4]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 5,
                "bs": "[\"growth\" : 5]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 6,
                "bs": "[\"growth\" : 6]"
            },
            {
                "id": "minecraft:wheat",
                "dv": 7,
                "bs": "[\"growth\" : 7]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:white_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:white_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:white_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:white_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:wood",
                "dv": 0,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:wood",
                "dv": 1,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:wood",
                "dv": 2,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:wood",
                "dv": 3,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:wood",
                "dv": 4,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:wood",
                "dv": 5,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:wood",
                "dv": 6,
                "bs": "[\"stripped_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 0,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 1,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 2,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 3,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 4,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 5,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 6,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 7,
                "bs": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 8,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 9,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 10,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 11,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 12,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 13,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 14,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:wooden_button",
                "dv": 15,
                "bs": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 0,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 1,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 2,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 3,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 4,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 5,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 6,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 7,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 8,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 9,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 10,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 11,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 12,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 13,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 14,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 15,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 16,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 17,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 18,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 19,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 20,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 21,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 22,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 23,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 24,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 25,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 26,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 27,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 28,
                "bs": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 29,
                "bs": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 30,
                "bs": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_door",
                "dv": 31,
                "bs": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 0,
                "bs": "[\"redstone_signal\" : 0]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 1,
                "bs": "[\"redstone_signal\" : 1]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 2,
                "bs": "[\"redstone_signal\" : 2]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 3,
                "bs": "[\"redstone_signal\" : 3]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 4,
                "bs": "[\"redstone_signal\" : 4]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 5,
                "bs": "[\"redstone_signal\" : 5]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 6,
                "bs": "[\"redstone_signal\" : 6]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 7,
                "bs": "[\"redstone_signal\" : 7]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 8,
                "bs": "[\"redstone_signal\" : 8]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 9,
                "bs": "[\"redstone_signal\" : 9]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 10,
                "bs": "[\"redstone_signal\" : 10]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 11,
                "bs": "[\"redstone_signal\" : 11]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 12,
                "bs": "[\"redstone_signal\" : 12]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 13,
                "bs": "[\"redstone_signal\" : 13]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 14,
                "bs": "[\"redstone_signal\" : 14]"
            },
            {
                "id": "minecraft:wooden_pressure_plate",
                "dv": 15,
                "bs": "[\"redstone_signal\" : 15]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 0,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 1,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"spruce\"]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 2,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"birch\"]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 3,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"jungle\"]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 4,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"acacia\"]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 5,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"dark_oak\"]"
            },
            {
                "id": "minecraft:wooden_slab",
                "dv": 6,
                "bs": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 0,
                "bs": "[\"color\" : \"white\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 1,
                "bs": "[\"color\" : \"orange\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 2,
                "bs": "[\"color\" : \"magenta\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 3,
                "bs": "[\"color\" : \"light_blue\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 4,
                "bs": "[\"color\" : \"yellow\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 5,
                "bs": "[\"color\" : \"lime\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 6,
                "bs": "[\"color\" : \"pink\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 7,
                "bs": "[\"color\" : \"gray\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 8,
                "bs": "[\"color\" : \"silver\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 9,
                "bs": "[\"color\" : \"cyan\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 10,
                "bs": "[\"color\" : \"purple\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 11,
                "bs": "[\"color\" : \"blue\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 12,
                "bs": "[\"color\" : \"brown\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 13,
                "bs": "[\"color\" : \"green\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 14,
                "bs": "[\"color\" : \"red\"]"
            },
            {
                "id": "minecraft:wool",
                "dv": 15,
                "bs": "[\"color\" : \"black\"]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 0,
                "bs": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 1,
                "bs": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 2,
                "bs": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 3,
                "bs": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 4,
                "bs": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 5,
                "bs": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 6,
                "bs": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "id": "minecraft:yellow_candle",
                "dv": 7,
                "bs": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "id": "minecraft:yellow_candle_cake",
                "dv": 0,
                "bs": "[\"lit\" : 0]"
            },
            {
                "id": "minecraft:yellow_candle_cake",
                "dv": 1,
                "bs": "[\"lit\" : 1]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 0,
                "bs": "[\"facing_direction\" : 0]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 1,
                "bs": "[\"facing_direction\" : 1]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 2,
                "bs": "[\"facing_direction\" : 2]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 3,
                "bs": "[\"facing_direction\" : 3]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 4,
                "bs": "[\"facing_direction\" : 4]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 5,
                "bs": "[\"facing_direction\" : 5]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 6,
                "bs": "[\"facing_direction\" : 6]"
            },
            {
                "id": "minecraft:yellow_glazed_terracotta",
                "dv": 7,
                "bs": "[\"facing_direction\" : 7]"
            }
        ],
      }
    },
  }
</script>


<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
</template>