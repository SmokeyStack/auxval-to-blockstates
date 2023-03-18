<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'minecraft:acacia_button',
            sortable: false,
            title: 'Block Id',
          },
          { key: '0', title: 'Aux Val' },
          { key: '[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]', title: 'Block State' },
        ],
        desserts: [
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:acacia_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:activator_rail",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:andesite_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"undamaged\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"undamaged\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"undamaged\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"undamaged\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"slightly_damaged\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"slightly_damaged\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"slightly_damaged\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"slightly_damaged\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"very_damaged\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"very_damaged\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"very_damaged\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"very_damaged\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"broken\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"broken\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"broken\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:anvil",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"damage\" : \"broken\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"small_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"large_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thin\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"bamboo_leaf_size\" : \"no_leaves\", \"bamboo_stalk_thickness\" : \"thick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bamboo_sapling",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 1, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:barrel",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:basalt",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:basalt",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:basalt",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"head_piece_bit\" : 0, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"head_piece_bit\" : 0, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"head_piece_bit\" : 1, \"occupied_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bed",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"head_piece_bit\" : 1, \"occupied_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bedrock",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"infiniburn_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bedrock",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"infiniburn_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:beetroot",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bell",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:birch_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:black_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:blackstone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:blast_furnace",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:blue_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:bone_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 0, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 0, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brewing_stand",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"brewing_stand_slot_a_bit\" : 1, \"brewing_stand_slot_b_bit\" : 1, \"brewing_stand_slot_c_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:brown_mushroom_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:bubble_column",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"drag_down\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:bubble_column",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"drag_down\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:cactus",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:cake",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"bite_counter\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"extinguished\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"extinguished\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"extinguished\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"extinguished\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"extinguished\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"extinguished\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"extinguished\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:campfire",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"extinguished\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carpet",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:carrots",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:carved_pumpkin",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:carved_pumpkin",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:carved_pumpkin",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:carved_pumpkin",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:cauldron",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:chain_command_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:chalkboard",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chalkboard",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chalkboard",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chalkboard",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"compound_creator\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"material_reducer\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"element_constructor\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chemistry_table",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chemistry_table_type\" : \"lab_table\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:chest",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:chorus_flower",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobbled_deepslate_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobbled_deepslate_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"cobblestone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"mossy_cobblestone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"granite\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"diorite\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"andesite\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"sandstone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"stone_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"mossy_stone_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"nether_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"end_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"prismarine\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"red_sandstone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"red_nether_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cobblestone_wall",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wall_block_type\" : \"cobblestone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cocoa",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"west\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"east\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"north\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"south\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_bp",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"west\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"east\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"north\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"south\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:colored_torch_rg",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color_bit\" : 0, \"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:command_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:composter",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"composter_fill_level\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:concrete_powder",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"pink\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"purple\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"red\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"yellow\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"pink\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"purple\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"red\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"yellow\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"pink\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"purple\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"red\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"yellow\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_dead",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_dead",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"pink\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_dead",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"purple\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_dead",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"red\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_dead",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"yellow\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_dead",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_color\" : \"blue\", \"coral_fan_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang2",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 0, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 1, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 2, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:coral_fan_hang3",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"coral_direction\" : 3, \"coral_hang_type_bit\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stem",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stem",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_stem",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:crimson_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:cyan_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_oak_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:dark_prismarine_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:darkoak_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:daylight_detector_inverted",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:deepslate_brick_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:deepslate_brick_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:deepslate_tile_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:deepslate_tile_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:detector_rail",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:diorite_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:dirt",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"dirt_type\" : \"normal\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:dirt",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"dirt_type\" : \"coarse\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dispenser",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"sunflower\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"syringa\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"grass\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"fern\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"rose\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"paeonia\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_plant",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"double_plant_type\" : \"sunflower\", \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab2",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab3",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab4",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab4",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"smooth_quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab4",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"stone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab4",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"cut_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab4",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"cut_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_stone_block_slab4",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:double_wooden_slab",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"triggered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:dropper",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"triggered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"end_portal_eye_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"end_portal_eye_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"end_portal_eye_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"end_portal_eye_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"end_portal_eye_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"end_portal_eye_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"end_portal_eye_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_portal_frame",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"end_portal_eye_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:end_rod",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:ender_chest",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:exposed_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:exposed_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:farmland",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"moisturized_amount\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:fire",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:flower_pot",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:flower_pot",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_lava",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:flowing_water",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:frame",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"item_frame_map_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:frosted_ice",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:frosted_ice",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:frosted_ice",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:frosted_ice",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:furnace",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 16]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 17]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 18]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 19]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 20]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 21]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 22]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 23]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 24]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 25]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 26]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 27]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 28]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 29]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 30]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 31]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 32,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 32]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 33,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 33]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 34,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 34]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 35,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 35]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 36,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 36]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 37,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 37]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 38,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 38]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 39,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 39]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 40,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 40]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 41,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 41]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 42,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 42]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 43,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 43]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 44,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 44]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 45,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 45]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 46,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 46]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 47,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 47]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 48,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 48]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 49,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 49]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 50,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 50]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 51,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 51]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 52,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 52]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 53,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 53]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 54,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 54]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 55,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 55]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 56,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 56]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 57,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 57]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 58,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 58]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 59,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 59]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 60,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 60]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 61,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 61]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 62,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 62]"
            },
            {
                "minecraft:acacia_button": "minecraft:glow_lichen",
                "0": 63,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"multi_face_direction_bits\" : 63]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 0, \"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:golden_rail",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_data_bit\" : 1, \"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:granite_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:gray_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:green_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"standing\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"hanging\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"side\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:grindstone",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attachment\" : \"multiple\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hard_stained_glass_pane",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 0, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 1, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 2, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:hay_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"deprecated\" : 3, \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:heavy_weighted_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"toggle_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:hopper",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"toggle_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:iron_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"rotation\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"rotation\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"rotation\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jigsaw",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"rotation\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:jungle_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:kelp",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:ladder",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:lantern",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"hanging\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lantern",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"hanging\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"water\", \"fill_level\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lava_cauldron",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cauldron_liquid\" : \"lava\", \"fill_level\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 0, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 1, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"oak\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"spruce\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"birch\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"old_leaf_type\" : \"jungle\", \"persistent_bit\" : 1, \"update_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves2",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"new_leaf_type\" : \"acacia\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves2",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"new_leaf_type\" : \"dark_oak\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:leaves2",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"new_leaf_type\" : \"acacia\", \"persistent_bit\" : 0, \"update_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lectern",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lever",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"block_light_level\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_blue_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_gray_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:light_weighted_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lime_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_blast_furnace",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_furnace",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_pumpkin",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_pumpkin",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_pumpkin",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_pumpkin",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:lit_smoker",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"old_log_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"old_log_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"old_log_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"old_log_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"old_log_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"old_log_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"old_log_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"old_log_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"old_log_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"old_log_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"old_log_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"old_log_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"old_log_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"old_log_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"old_log_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"old_log_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log2",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"new_log_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log2",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"new_log_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:log2",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"new_log_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:loom",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:loom",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:loom",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:loom",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:magenta_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_standing_sign",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wood",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wood",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:mangrove_wood",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:melon_stem",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"stone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"cobblestone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"stone_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"mossy_stone_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"cracked_stone_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"chiseled_stone_brick\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:monster_egg",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"monster_egg_stone_type\" : \"stone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_cobblestone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:mossy_stone_brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:mud_brick_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:mud_brick_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:muddy_mangrove_roots",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:muddy_mangrove_roots",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:muddy_mangrove_roots",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_wart",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_wart",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_wart",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:nether_wart",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:normal_stone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:oak_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:observer",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:orange_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:oxidized_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:oxidized_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:pink_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:piston_arm_collision",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:planks",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_andesite_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_basalt",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_basalt",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_basalt",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_blackstone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_deepslate_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_deepslate_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_diorite_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:polished_granite_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:portal",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"portal_axis\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:portal",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"portal_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:portal",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"portal_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:portal",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"portal_axis\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:potatoes",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_comparator",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:powered_repeater",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"prismarine_block_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"prismarine_block_type\" : \"dark\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"prismarine_block_type\" : \"bricks\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"prismarine_block_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_bricks_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:prismarine_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:pumpkin_stem",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:purple_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:purpur_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"default\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"chiseled\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"lines\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"chisel_type\" : \"smooth\", \"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:quartz_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:rail",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"rail_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"poppy\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"orchid\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"allium\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"houstonia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"tulip_red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"tulip_orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"tulip_white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"tulip_pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"oxeye\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"cornflower\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"lily_of_the_valley\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_flower",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"flower_type\" : \"poppy\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_mushroom_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"huge_mushroom_bits\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_nether_brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"heiroglyphs\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"cut\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"smooth\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:red_sandstone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_torch",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:redstone_wire",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:reeds",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:repeating_command_block",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"conditional_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:respawn_anchor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"respawn_anchor_charge\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:respawn_anchor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"respawn_anchor_charge\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:respawn_anchor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"respawn_anchor_charge\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:respawn_anchor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"respawn_anchor_charge\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:respawn_anchor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"respawn_anchor_charge\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:sand",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_type\" : \"normal\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sand",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_type\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"heiroglyphs\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"cut\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sand_stone_type\" : \"smooth\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:sandstone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sapling",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age_bit\" : 0, \"sapling_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 0, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 1, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 2, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 3, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 4, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 5, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 6, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 7, \"stability_check\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 0, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 1, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 2, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 3, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 4, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 5, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 6, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:scaffolding",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stability\" : 7, \"stability_check\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 0, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 1, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 2, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 3, \"dead_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 0, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 1, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 2, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sea_pickle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cluster_count\" : 3, \"dead_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:seagrass",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sea_grass_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:seagrass",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sea_grass_type\" : \"double_top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:seagrass",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sea_grass_type\" : \"double_bot\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:seagrass",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sea_grass_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:shulker_box",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:silver_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:skull",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:smoker",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_quartz_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_red_sandstone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:smooth_sandstone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 0, \"height\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:snow_layer",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"covered_bit\" : 1, \"height\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_fire",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_lantern",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"hanging\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:soul_lantern",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"hanging\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sponge",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sponge_type\" : \"dry\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sponge",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"sponge_type\" : \"wet\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:spruce_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_glass_pane",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stained_hardened_clay",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_banner",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:sticky_piston_arm_collision",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"stone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"granite\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"granite_smooth\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"diorite\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"diorite_smooth\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"andesite\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"andesite_smooth\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_type\" : \"stone\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"smooth_stone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"wood\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"quartz\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type\" : \"nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"purpur\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_rough\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_dark\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"prismarine_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"mossy_cobblestone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"smooth_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab2",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_2\" : \"red_nether_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"end_stone_brick\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"smooth_red_sandstone\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"andesite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_diorite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"granite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab3",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_3\" : \"polished_granite\", \"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab4",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab4",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"smooth_quartz\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab4",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"stone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab4",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"cut_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab4",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"cut_red_sandstone\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_block_slab4",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_slab_type_4\" : \"mossy_stone_brick\", \"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_brick_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stone_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonebrick",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_brick_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonebrick",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_brick_type\" : \"mossy\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonebrick",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_brick_type\" : \"cracked\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonebrick",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_brick_type\" : \"chiseled\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonebrick",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_brick_type\" : \"smooth\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonebrick",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stone_brick_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:stonecutter_block",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_acacia_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_acacia_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_acacia_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_acacia_log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_birch_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_birch_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_birch_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_birch_log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_crimson_hyphae",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_crimson_hyphae",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_crimson_hyphae",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_crimson_stem",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_crimson_stem",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_crimson_stem",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_dark_oak_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_dark_oak_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_dark_oak_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_dark_oak_log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_jungle_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_jungle_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_jungle_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_jungle_log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_mangrove_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_mangrove_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_mangrove_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_mangrove_wood",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_mangrove_wood",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_mangrove_wood",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_oak_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_oak_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_oak_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_oak_log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_spruce_log",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_spruce_log",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_spruce_log",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_spruce_log",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_warped_hyphae",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_warped_hyphae",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_warped_hyphae",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_warped_stem",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_warped_stem",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:stripped_warped_stem",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"data\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"save\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"load\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"corner\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"invalid\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"export\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_block",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_block_type\" : \"data\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_void",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_void_type\" : \"void\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:structure_void",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"structure_void_type\" : \"air\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:sweet_berry_bush",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:tallgrass",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"tall_grass_type\" : \"default\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:tallgrass",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"tall_grass_type\" : \"tall\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:tallgrass",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"tall_grass_type\" : \"fern\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:tallgrass",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"tall_grass_type\" : \"snow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:tnt",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"allow_underwater_bit\" : 0, \"explode_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tnt",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"allow_underwater_bit\" : 0, \"explode_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tnt",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"allow_underwater_bit\" : 1, \"explode_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tnt",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"allow_underwater_bit\" : 1, \"explode_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:torch",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:trapped_chest",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 0, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 0, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:trip_wire",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"disarmed_bit\" : 1, \"powered_bit\" : 1, \"suspended_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 0, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 1, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 2, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 3, \"powered_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 0, \"direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 0, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 1, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 2, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:tripwire_hook",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"attached_bit\" : 1, \"direction\" : 3, \"powered_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"cracked\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"max_cracked\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"one_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"two_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"three_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:turtle_egg",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"cracked_state\" : \"no_cracks\", \"turtle_egg_count\" : \"four_egg\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 16]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 17]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 18]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 19]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 20]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 21]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 22]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 23]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 24]"
            },
            {
                "minecraft:acacia_button": "minecraft:twisting_vines",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"twisting_vines_age\" : 25]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:underwater_torch",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"west\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"east\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"north\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"south\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"top\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unlit_redstone_torch",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"torch_facing_direction\" : \"unknown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 0, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_comparator",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"output_lit_bit\" : 1, \"output_subtract_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:unpowered_repeater",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"repeater_delay\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:vine",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"vine_direction_bits\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_banner",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 0, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_fence_gate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"in_wall_bit\" : 1, \"open_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_hyphae",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_hyphae",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_hyphae",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 0, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stairs",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"upside_down_bit\" : 1, \"weirdo_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_standing_sign",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"ground_sign_direction\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stem",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"y\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stem",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"x\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_stem",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"pillar_axis\" : \"z\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 0, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_trapdoor",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"open_bit\" : 1, \"upside_down_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:warped_wall_sign",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:water",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"liquid_depth\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_exposed_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_exposed_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_oxidized_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_oxidized_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_weathered_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:waxed_weathered_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:weathered_cut_copper_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:weathered_cut_copper_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 16]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 17]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 18]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 19]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 20]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 21]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 22]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 23]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 24]"
            },
            {
                "minecraft:acacia_button": "minecraft:weeping_vines",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"weeping_vines_age\" : 25]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:wheat",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"growth\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:white_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wood",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"stripped_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 0, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_button",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"button_pressed_bit\" : 1, \"facing_direction\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 16,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 17,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 18,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 19,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 20,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 21,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 22,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 23,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 24,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 25,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 26,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 27,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 0, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 28,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 0, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 29,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 1, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 30,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 2, \"door_hinge_bit\" : 0, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_door",
                "0": 31,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"direction\" : 3, \"door_hinge_bit\" : 1, \"open_bit\" : 1, \"upper_block_bit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 7]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 8]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 9]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 10]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 11]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 12]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 13]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 14]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_pressure_plate",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"redstone_signal\" : 15]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"spruce\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"birch\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"jungle\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"acacia\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"dark_oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wooden_slab",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"top_slot_bit\" : 0, \"wood_type\" : \"oak\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"white\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"orange\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"magenta\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"light_blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"yellow\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"lime\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"pink\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"gray\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 8,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"silver\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 9,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"cyan\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 10,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"purple\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 11,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"blue\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 12,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"brown\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 13,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"green\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 14,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"red\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:wool",
                "0": 15,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"color\" : \"black\"]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 0, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 1, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 2, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"candles\" : 3, \"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle_cake",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_candle_cake",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"lit\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 0,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 0]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 1,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 1]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 2,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 2]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 3,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 3]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 4,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 4]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 5,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 5]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 6,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 6]"
            },
            {
                "minecraft:acacia_button": "minecraft:yellow_glazed_terracotta",
                "0": 7,
                "[\"button_pressed_bit\" : 0, \"facing_direction\" : 0]": "[\"facing_direction\" : 7]"
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
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>